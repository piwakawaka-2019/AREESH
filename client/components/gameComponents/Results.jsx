import React, { Component, Fragment as F} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {transcribeSpeech, checkSpelling} from '../../apis/speech'
import {changeView} from '../../actions/game'

export class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
          // for speech-recognition version 
          result: ""
         }
    
         this.handleClick = this.handleClick.bind(this)
         this.updateResult = this.updateResult.bind(this)
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
        console.log("state updated to: ", this.state.result)
      }

      componentDidMount () {
        let {word, spellingAttempt} = this.props

        let result = checkSpelling(word, spellingAttempt)
        console.log("result: ", result )

        this.setState({
          result: ""
        })

        result.forEach((letter, i) => {
          console.log(`letter ${i} is ${letter}`)
          setTimeout(() => this.updateResult(letter), 750 * i)
        })
      }

      changeView = (e) => {
        e.preventDefault()
        this.props.displayWinner()
      }
    
      render() { 
        return ( 
          <F>
            <button onClick={() => this.handleClick()}>Transcribe File</button>
            <p>Answer: {this.state.result}</p>
            <button
            onClick={this.changeView}
            className="btn btn-outline-warning btn-rounded waves-effect"
          >
            But did you win?
          </button>
          </F>

         );
      }
}

const mapStateToProps = state => ({
  word: state.game.wordData.word,
  spellingAttempt: state.game.wordData.spellingAttempt
});

const mapDispatchToProps = dispatch => {
  return {
    displayWinner: e => dispatch(changeView("displayWinner"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
