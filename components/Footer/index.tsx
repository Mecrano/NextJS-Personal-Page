import Footer from './Footer'
import useFooter from './useFooter'

const FooterContainer = () => {
  const { links, t } = useFooter()

  return <Footer links={links} t={t} />
}

export default FooterContainer
