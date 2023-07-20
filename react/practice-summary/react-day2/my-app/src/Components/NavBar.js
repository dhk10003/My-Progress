import React from 'react'
import LogoImage from '../Assets/funLogo.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <nav class="navbar">
        Navbar
        <img src={LogoImage} alt="fun logo" style={{ width: '40px' }} />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav"></div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
