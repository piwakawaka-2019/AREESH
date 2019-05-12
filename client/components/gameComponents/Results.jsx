import React, { Component, Fragment as F} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {transcribeSpeech, checkSpelling} from '../../apis/speech'
import {changeView} from '../../actions/game'

export class Results extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          transcribedWord: ""
         }
    
         this.handleClick = this.handleClick.bind(this)
         this.updateTranscribedWord = this.updateTranscribedWord.bind(this)
      }
    
      handleClick () {
        transcribeSpeech('flacSonic.flac')
        .then(transcription => checkSpelling("sonic", transcription))
        .then(result => {
          this.setState({
            transcribedWord: ""
          })
          result.forEach((letter, i) => {
            setTimeout(() => this.updateTranscribedWord(letter), 750 * i)
          })
        })
      }
    
    
      updateTranscribedWord (letter) {
        this.setState({
          transcribedWord: this.state.transcribedWord + letter
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
            <p>Answer: {this.state.transcribedWord}</p>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    displayWinner: e => dispatch(changeView("displayWinner"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
