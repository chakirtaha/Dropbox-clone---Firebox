import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'>Add new file</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating blue lighten-1">NN</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks