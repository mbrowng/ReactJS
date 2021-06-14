import Layout from '../../components/Layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'

import utilStyles from '..//styles/utils.js'

export default function Post({ postData }){
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className="headingX1">
                    {postData.title}
                </h1>
                <div className="lightText">
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
            <style jsx global>{utilStyles}</style>
        </Layout>
    )
}

// async async, the magic of async
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }){
    const postData = await getPostData(params.id)
    return {
        props : {
            postData
        }
    }
} 

