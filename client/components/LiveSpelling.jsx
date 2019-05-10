import React, { Component, Fragment } from 'react';

import {transcribeSpeech, checkSpelling} from '../apis/speech'

class LiveSpelling extends Component {
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
    .then(transcription => checkSpelling("sober", transcription))
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

  render() { 
    return ( 
      <Fragment>
        <button onClick={() => this.handleClick()}>Transcribe File</button>
        <p>Answer: {this.state.transcribedWord}</p>
      </Fragment>
     );
  }
}
 
export default LiveSpelling;