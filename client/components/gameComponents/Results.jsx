import React, { Component, Fragment as F} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {transcribeSpeech, checkSpelling} from '../../apis/speech'
import {changeView, setWordCorrect} from '../../actions/game'
import Winner from './Winner'

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // for speech-recognition version 
      result: "",
      winnerDisplayed: false
      }

      this.handleClick = this.handleClick.bind(this)
      this.updateResult = this.updateResult.bind(this)
      this.displayWinner = this.displayWinner.bind(this)
  }

  componentDidMount (e) {
    let {word, spellingAttempt} = this.props

    let result = checkSpelling(word, spellingAttempt)

    this.setState({
      result: "",
    })

    result.forEach((letter, i) => {
      setTimeout(() => this.updateResult(letter), 750 * i)
    })
  }
  
  // for speech-recognition version 
  handleClick () {
    transcribeSpeech('flacSonic.flac')
    .then(transcription => checkSpelling("sonic", transcription))
    .then(result => {
      this.setState({
        result: ""
      })
      result.forEach((letter, i) => {
        setTimeout(() => this.updateResult(letter), 750 * i)
      })
    })
  }
  
  updateResult (letter) {
    this.setState({
      result: this.state.result + letter
    })

    if(letter == 'X' || letter == '✓'){
      this.setState({
        winnerDisplayed: true
      })
    }

    let {word, spellingAttempt, dispatchWordCorrect} = this.props

    if(word == spellingAttempt){
      dispatchWordCorrect(true)
    } else dispatchWordCorrect(false)
  }

  displayWinner () {
    this.setState({
      winnerDisplayed: true
    })
  }

  changeView = (e) => {
    e.preventDefault()
    this.props.displayWinner()
  }

  render() { 
    return ( 
      <F>
        <h1>{this.state.result}</h1>
        <Winner winnerDisplayed={this.state.winnerDisplayed}/>
      </F>
    )
  }
}

const mapStateToProps = state => ({
  word: state.game.wordData.word,
  spellingAttempt: state.game.wordData.spellingAttempt
});

const mapDispatchToProps = dispatch => {
  return {
    displayWinner: e => dispatch(changeView("displayWinner")),
    dispatchWordCorrect: wordcorrect => dispatch(setWordCorrect(wordcorrect))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
