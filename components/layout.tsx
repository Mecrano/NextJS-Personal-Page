import Footer from './Footer'
import Header from './Header'

function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
