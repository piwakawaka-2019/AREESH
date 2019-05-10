import { Link, NavLink } from "react-router-dom";

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignedInNav from "./SignedInNav";
import SignedOutNav from "./SignedOutNav";

export class Nav extends Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    console.log(this.props);
  }

  render() {
    
    return (
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark grey darken-3">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
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
          <ul className="navbar-nav mr-auto">
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

          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
