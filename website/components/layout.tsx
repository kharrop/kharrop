import React from 'react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import DarkModeIcon from '../public/icons/dark.svg'
import LightModeIcon from '../public/icons/light.svg'
import Aside from './aside'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/layout.module.css'
import { TransitionGroup } from 'react-transition-group'

export const siteTitle = 'Kelly Harrop, UX Engineer'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setIsMounted(true)
  }, [])
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Kelly Harrop, UX Engineer" />
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header
        className={`${styles.header} border-b border-gray-200 dark:border-gray-800`}
      >
        <div className="content-wrapper">
          <nav className={styles.nav}>
            <ul className={styles.group}>
              <li>
                <Link href="/">
                  <a
                    className={`${styles.logo} text-xl font-semibold text-gray-800 dark:text-white hover:no-underline`}
                  >
                    Kelly Harrop
                  </a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == '/working-style' ? styles.active : ''
                }
              >
                <Link href="/working-style">
                  <a className="text-gray-800 opacity-80 dark:text-white hover:no-underline hover:opacity-100 transition duration-100">
                    <span className="pb-1">Working Style</span>
                  </a>
                </Link>
              </li>
              <li className={router.pathname == '/blog' ? styles.active : ''}>
                <Link href="/blog">
                  <a className="text-gray-800 opacity-80 dark:text-white hover:no-underline hover:opacity-100 transition duration-100">
                    <span className="pb-1">Blog</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.group}>
            <ul>
              <li>
                {isMounted && (
                  <button
                    className="p-3 text-center transition rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                    onClick={switchTheme}
                    title={`Activate ${
                      theme === 'light' ? 'dark' : 'light'
                    } mode`}
                    aria-label={`Activate ${
                      theme === 'light' ? 'dark' : 'light'
                    } mode`}
                  >
                    <TransitionGroup
                      transitionName="theme"
                      transitionEnterTimeout={300}
                      transitionLeaveTimeout={300}
                    >
                      {theme === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
                    </TransitionGroup>
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="layout mt-28 content-wrapper grid gap-x-28 grid-flow-col lg:grid-flow-row">
        <main>{children}</main>
        <aside className="w-40 lg:w-full">
          <Aside />
        </aside>
      </div>
    </div>
  )
}
