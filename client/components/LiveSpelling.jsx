import React, { Component, Fragment } from 'react';

import {transcribeSpeechAction} from '../actions/speech'
import {transcribeSpeechAPI} from '../apis/speech'

class LiveSpelling extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      transcribedWord: ""
     }

     this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    transcribeSpeechAction()
    transcribeSpeechAPI()
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