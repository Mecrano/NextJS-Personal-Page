import Head from 'next/head'

import Footer from './Footer'
import Header from './Header'

function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Edwin Obando - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
