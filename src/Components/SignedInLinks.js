/* eslint-disable jsx-a11y/anchor-is-valid */
import { connect } from 'react-redux'
import { signOut } from '../store/actions/authActions'
import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/upload'>Upload File</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1"> {props.profile.initials}</NavLink></li>
        
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)