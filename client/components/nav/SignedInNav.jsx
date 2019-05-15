import React, { Fragment as F } from "react"
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import { logoutUser } from "../../actions/logout"

function SignedInNav({logout, user}) {
  return (
    <F>
      {/* <li className="nav-item">
        <a className="nav-link waves-effect waves-light">
          1<i className="fas fa-envelope" />
        </a>
      </li> */}
      <li className="nav-item avatar dropdown" >
        <a
          className="nav-link dropdown-toggle"
          id="navbarDropdownMenuLink-55"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src={user.image_url}
            className="rounded-circle z-depth-0"
            alt="avatar image"
            style={{ width: 30, height:30}}
          />
        </a>
        <div
          className="dropdown-menu dropdown-menu-right dropdown-secondary"
          aria-labelledby="navbarDropdownMenuLink-55"
        >
          <NavLink to= "./Profile" className="dropdown-item" >
            Profile
            </NavLink>
          <a className="dropdown-item" onClick={logout}>
            Logout
          </a>
        </div>
      </li>
    </F>
  )
}

const mapStateToProps = (state) => {
  return {user:state.auth.user}
}

const mapDispatchToProps = dispatch => {
  return {
    logout: e => dispatch(logoutUser(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInNav)

