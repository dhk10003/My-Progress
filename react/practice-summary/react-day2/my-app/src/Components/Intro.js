import React from 'react'
import SillyLogo from '../Assets/funLogo.png'

const Intro = ({ username, meal }) => {
  return (
    <>
      <img
        src={SillyLogo}
        alt="fun friends"
        style={{ width: '60px', height: '100px' }}
      />
      <h2
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '19px',
          color: 'red',
        }}
      >
        My Awesome Food App, {username}
      </h2>
      <p>Come here for many different options for {meal}!</p>
      <button class="btn btn-primary" type="submit">
        Sign Up Button
      </button>
    </>
  )
}

export default Intro
