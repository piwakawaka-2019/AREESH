import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, NavLink } from "react-router-dom"
// are we using this package?
import PropTypes from "prop-types"

import SignedInNav from "./SignedInNav"
import SignedOutNav from "./SignedOutNav"

export class Nav extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light warning-color lighten-5">
        <div id="logo-skull-css">
  <ul id="skull-structure">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <ul id="eyes">
    <li></li>
    <li></li>
  </ul>
  <ul id="nose">
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <ul id="skull-pieces">
    <li></li>
    <li></li>
   
  </ul>
    
</div>
        <div className="title4nav">Areesh</div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-555"
          aria-controls="navbarSupportedContent-555"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent-555"
        >
          <ul className="navbar-nav mr-auto ">
            <NavLink
              to="#"
              className="nav-item"
              activeClassName="active"
              className="nav-link" href="#"
            >
              PLACEHOLDER
            </NavLink>
          </ul>
          {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-555"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div
                className="dropdown-menu dropdown-secondary"
                aria-labelledby="navbarDropdownMenuLink-555"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <NavLink to="/gameTestVinnie" className="nav-item" activeClassName="active">
              <a className="nav-link" href="#">
                gameTestVinnie
              </a>
            </NavLink>
          </ul>
          <ul className="navbar-nav ml-auto nav-flex-icons">
            {this.props.auth.user ? <SignedInNav/>:<SignedOutNav/>}

          </ul> */}
          <ul className="navbar-nav ml-auto nav-flex-icons #ffca28 amber lighten-1">
            {this.props.auth.user ? <SignedInNav /> : <SignedOutNav />}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
