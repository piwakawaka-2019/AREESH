import React, { Component } from 'react'
import { connect } from 'react-redux'
// are we still using this package?
import PropTypes from 'prop-types'

import Nav from './Nav'

export class Header extends Component {
  render() {
    return (
      <Nav/>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Header)




