import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/Layout'

// css
import globalStyles from '..//styles/global.js'
import indexStyles from '../styles/index.js'

export default function FirstPost() {
    return (
        <div>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post, indeed</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
            <style jsx global>{globalStyles}</style>
        </div>
    )
}