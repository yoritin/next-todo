import Head from 'next/head'
import { FC } from 'react'

export const siteTitle = 'Next Todo App'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout
