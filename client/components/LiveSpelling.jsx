import React, { Component, Fragment } from 'react';

import {transcribeSpeechAPI, checkSpelling} from '../apis/speech'

class LiveSpelling extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      transcribedWord: ""
     }

     this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    transcribeSpeechAPI('flacSonic.flac')
    .then(transcription => checkSpelling("sorry", transcription))
    .then(result => {
      console.log(result)
      result.forEach((letter, i) => {
        setTimeout(() => this.printLetter(letter), 1000 * i)
      })
    })
  }

  printLetter (letter) {
    console.log(letter)
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