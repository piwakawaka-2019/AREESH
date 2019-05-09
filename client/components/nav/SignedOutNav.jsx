import React, { Fragment as F } from 'react'
import {NavLink} from 'react-router-dom'

export default function SignedOutNav() {
  return (
    <F>
    <NavLink  to="/register" className="nav-item" activeClassName="active">
      <a  className="nav-link waves-effect waves-light">
        Sign Up
      </a>
    </NavLink>
    <NavLink to="/login" className="nav-item" activeClassName="active">
      <a className="nav-link waves-effect waves-light">
        Log In
      </a>
    </NavLink>
  </F>
  )
}