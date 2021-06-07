import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'posts')

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