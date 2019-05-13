import React, { Component, Fragment as F } from 'react'
import { connect } from "react-redux"
import Firework from './Firework'

import {changeView} from '../../actions/game'

class Winner extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  changeView = (e) => {
    e.preventDefault()
    this.props.displayHome()
  }

  render() { 
    let winnerStatus = "Loser :("
    if (this.props.wordCorrect) {
      winnerStatus = "Winner!"
    }

    if(this.props.winnerDisplayed){
      return ( 
        <F > 
          
          <Firework />
          <h1>{winnerStatus}</h1>
          <button
            onClick={this.changeView}
            className="btn btn-outline-warning btn-rounded waves-effect"
          >
            Play again?
          </button>
      
        </F>
      )
    } else return <F></F>
  }
}


const mapStateToProps = state => ({
  wordCorrect: state.game.wordData.wordCorrect
})

const mapDispatchToProps = dispatch => {
  return {
    displayHome: e => dispatch(changeView("displayWhichWord"))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Winner)