import React, { Component, Fragment as F } from 'react'
import { connect } from "react-redux"

import {changeView} from '../../actions/game'

class WordDefinition extends Component {
  constructor(props) {
    super(props)
  }

  changeView = (e) => {
    e.preventDefault()
    this.props.displayLiveSpelling()
  }

  render() { 
    let {word, definitions} = this.props
    return ( 
      <F>
      <div className="card  m-4  p-3 text-center">
          <h1>{word}</h1>
          <p>{definitions[0]}</p>
          <button
            onClick={this.changeView}
            className="btn btn-outline-warning btn-rounded waves-effect"
          >
            Start Spelling
          </button>
        </div>
      </F>
    )
  }
}

const mapStateToProps = state => ({
  definitions: state.game.wordData.definitions,
  word: state.game.wordData.word
})

const mapDispatchToProps = dispatch => {
  return {
    displayLiveSpelling: e => dispatch(changeView("displayLiveSpelling"))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordDefinition)