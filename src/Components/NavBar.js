import React from 'react'
//import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const NavBar = () => {
  return (
    <nav class="white" role="navigation">
    <div class="nav-wrapper container">
      <a id="logo-container" href="/" class="brand-logo">FireBox</a>
      
      <SignedInLinks />
      <SignedOutLinks />
      

      
    </div>
  </nav>

    
  )
  }   



export default NavBar
