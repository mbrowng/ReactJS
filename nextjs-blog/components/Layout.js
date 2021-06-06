import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import layoutStyles from '../pages/styles/layout'
import utilStyles from '../pages/styles/utils'

const name = 'John Malkovich'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({children, home}){
    return (
        <div className = "container">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="very nice" />
                <meta 
                    property="og:image"
                    content={
                        `https://og-image.vercel.app/${encodeURI(
                            siteTitle
                        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_larg_image"/>
            </Head>
            <header className="header">
                {home ? (
                    <>
                        <Image
                            priority
                            src="/../public/images/profile.png"
                            className="borderCircle"
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className="heading2X1">{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/../public/images/profile.png"
                                    className="borderCircle"
                                    height={108}
                                    width={108}
                                    alt={name}                      
                                />
                            </a>
                        </Link>
                        <h2 className="headingLg">
                            <Link href="/">
                                <a className="colorInherit">{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {home && (
                <div className="backToHome">
                    <Link href="/">
                        <a> Back to Home</a>
                    </Link>
                </div>            
            )}

            <style jsx>{layoutStyles}</style>
            <style jsx>{utilStyles}</style>
        </div>
        
    )
}