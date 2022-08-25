import Head from 'next/head'

import Footer from './global/Footer'
import Header from './global/Header'

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
