//import './/styles/index.css'
import globalStyles from './/styles/global.js'
import indexStyles from './/styles/index.js'

import Layout from '../components/Layout'

import Head from 'next/head'
import Link from 'next/link'

import { getSortedPostsData } from '../lib/posts.js'


// Retrieving Data
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


// Main
export default function Home({ allPostsData }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout home>
      <main>
        <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            <a>This page!</a>
          </Link>
        </h1>

        <section className="headingMd padding1px">
          <h2 className="headingLg">Blog</h2>
          <ul className="list">
            {allPostsData.map( ({id, date, title}) => (
              <li className="listItem" key={id}>
                {title}
                <br/>
                {id}
                <br/>
                {date}
              </li>
            ))}
          </ul>
        </section>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      </Layout>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{indexStyles}</style>
      <style jsx global>{globalStyles}</style>
    </div>
  )
}
