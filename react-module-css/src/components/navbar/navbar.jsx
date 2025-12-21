import React from 'react'
import Button from '../Button/button.jsx'
import style from './navbar.module.css'

const Navbar = () => {
  return (
    <div>
        <nav>
            <h2>Webify</h2>
            <div className={style.links}>
                <a href="#index.html">Home</a>
                <a href="/about">About</a>
                <a href="#services">Services</a>
            </div>
            {<Button />}
        </nav>
    </div>
  )
}

export default Navbar 
