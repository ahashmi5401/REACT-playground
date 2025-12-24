import React from 'react'
import LeftText from './leftContent/left-text.jsx'
import RightCards from './rightContent/RightCards.jsx'

const Hero = () => {
  return (
    <div id='section1Hero' className={`py-8 px-18 h-[90vh] flex gap-10 items-center `}>
        <LeftText />
        <RightCards />
    </div>
  )
}

export default Hero