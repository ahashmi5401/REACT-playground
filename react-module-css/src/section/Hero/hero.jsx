import React from 'react'
import style from './hero.module.css'

const Hero = () => {
  return (
    <div>
        <section className={style.hero}>
            <h1>Welcome to Webify</h1>
            <p>Your one-stop solution for web development</p>
        </section>
    </div>
  )
}

export default Hero