import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'


const postDirectory = path.join(process.cwd(), 'posts/pre-rendering')

export function getSortedPostsData(){
    const fileNames = fs.readdirSync(postDirectory)
    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')
        // Read markdown as file as string
        const  fullPath  = path.join(postDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        // use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)
        return {
            id,
            ...matterResult.data
        }
    })

    // Sort posts by data
    return allPostsData.sort( ({date:a},{date:b}) => {
            if(a < b){
                return 1
            } else if(a > b){
                return -1
            } else {
                return 0
            }
        })
    }

export function getAllPostIds(){
    const fileNames = fs.readdirSync(postDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(id){
    const fullPath = path.join(postDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML String
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id
    return {
        id, 
        contentHtml,
        ...matterResult.data
    }
}