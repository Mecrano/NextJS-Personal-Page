import Header from './Header'
import useHeader from './useHeader'

const HeaderContainer = () => {
  const navigationLinks = useHeader()

  return <Header navigationLinks={navigationLinks} />
}

export default HeaderContainer
