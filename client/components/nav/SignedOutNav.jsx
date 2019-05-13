import React, { Fragment as F } from 'react'
import {NavLink} from 'react-router-dom'

export default function SignedOutNav() {
  return (
    <F>
      <NavLink className="nav-link waves-effect waves-light  " to="/login"  activeClassName="active">
        Log In
      </NavLink>
      <NavLink className="nav-link waves-effect waves-light" to="/register"  activeClassName="active">
        Sign Up
      </NavLink>
  </F>
  )
}