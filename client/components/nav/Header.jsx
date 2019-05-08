import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Nav from './Nav';


export class Header extends Component {
  render() {
    return (
        <Nav/>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)




