import styles from './styles.module.css'

interface HeroProps extends React.PropsWithChildren {
  greeting: string | React.ReactElement | React.ReactNodeArray
  knowledge: React.ReactElement
  from: string | React.ReactElement | React.ReactNodeArray
}

const Hero = ({ children, greeting, knowledge, from }: HeroProps) => {
  return (
    <div className="relative flex-center w-full">
      {children}
      <div className={`${styles.heroContent} absolute text-center sm:text-left`}>
        <p className="text-2xl sm:text-5xl w-full">{greeting}</p>
        <p className="text-2xl sm:text-5xl w-full">{knowledge}</p>
        <p className="text-2xl sm:text-5xl w-full">{from}</p>
      </div>
    </div>
  )
}

export default Hero
