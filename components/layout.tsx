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
      <main className="w-full max-w-7xl p-3 mx-auto">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
