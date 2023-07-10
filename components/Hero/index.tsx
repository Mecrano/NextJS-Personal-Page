import React from 'react'

interface HeroProps extends React.PropsWithChildren {
  greeting: string | React.ReactElement | React.ReactNodeArray
  knowledge: React.ReactElement
  from: string | React.ReactElement | React.ReactNodeArray
}

const Hero = ({ children, greeting, knowledge, from }: HeroProps) => {
  return (
    <div className="relative flex-center w-full">
      {children}
      <div className={`w-full absolute text-center sm:text-left sm:w-auto sm:min-w-[700px]`}>
        <p className="text-h2 sm:text-h2-md w-full">{greeting}</p>
        <p className="text-h2 sm:text-h2-md w-full">{knowledge}</p>
        <p className="text-h2 sm:text-h2-md w-full">{from}</p>
      </div>
    </div>
  )
}

export default Hero
