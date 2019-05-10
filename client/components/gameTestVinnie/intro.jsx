import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {changeView} from '../../actions/game'
class Intro extends Component {

  render() {
    const {displayWordHint} = this.props
    return (
      <div>
        <h3>Enter a word you want to spell and see if you can spell it.</h3>
        <button className="btn" onClick={displayWordHint}>ee!</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})


const mapDispatchToProps = dispatch => {
    return {
      displayWordHint: e => dispatch(changeView('displayWordHint'))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Intro)
