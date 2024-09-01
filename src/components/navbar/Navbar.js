import React from 'react'
import "./navbar.css"
import "./../../index.css"

function navbar() {
  return (
    <div className='header'>
      <h1 className='header-name'>RecipeBook</h1>

      <div className='header-links'>
        <a href="/" className='nav-name'>Home</a>
        <a href="/about" className='nav-name'>About</a>
        <a href="/contact" className='nav-name'>Contact</a>
      </div>
    </div>
  )
}

export default navbar