import Code from './Code'

const Hero = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex-center">
      <Code />
      <p className="absolute text-3xl sm:text-5xl text-center sm:text-left max-w-6xl px-8">{children}</p>
    </div>
  )
}

export default Hero
