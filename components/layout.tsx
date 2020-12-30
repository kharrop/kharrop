import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/layout.module.css'

export const siteTitle = 'Kelly Harrop, 🎨 👩🏻‍💻'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="inline-flex">
        <div className="logo">
          <Link href="/">
            <a>Kelly Harrop</a>
          </Link>
        </div>
        <nav>
          <ul className={`inline-flex ml-12 ${styles.nav}`}>
            <li className={router.pathname == '/user-guide' ? 'active' : ''}>
              <Link href="/user-guide">
                <a>User guide</a>
              </Link>
            </li>
            <li className={router.pathname == '/timeline' ? 'active' : ''}>
              <Link href="/timeline">
                <a>Timeline</a>
              </Link>
            </li>
            <li className={router.pathname == '/blog' ? 'active' : ''}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
