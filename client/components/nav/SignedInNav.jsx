import React, { Fragment as F } from "react";
import { logoutUser } from "../../actions/logout";
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
function SignedInNav({logout}) {
  return (
    <F>
      <li className="nav-item">
        <a className="nav-link waves-effect waves-light">
          1<i className="fas fa-envelope" />
        </a>
      </li>
      <li className="nav-item avatar dropdown">
        <a
          className="nav-link dropdown-toggle"
          id="navbarDropdownMenuLink-55"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
            className="rounded-circle z-depth-0"
            alt="avatar image"
            style={{ width: 30 }}
          />
        </a>
        <div
          className="dropdown-menu dropdown-menu-right dropdown-secondary"
          aria-labelledby="navbarDropdownMenuLink-55"
        >
          <a className="dropdown-item" >
            Profile
          </a>
          <a className="dropdown-item" onClick={logout}>
            Logout
          </a>
        </div>
      </li>
    </F>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logout: e => dispatch(logoutUser(e))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignedInNav)

