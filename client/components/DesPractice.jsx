import React, { Component, Fragment } from 'react';

import {transcribeSpeech, checkSpelling} from '../apis/speech'

class DesPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() { 
    return ( 
      <Fragment>
        	<h2>Record</h2>
      		<p>
      			<button id="record"></button>
      			<button id="stopRecord" disabled>Stop</button>
      		</p>
      		<p>
      			<audio id="recordedAudio"></audio>
      		</p>
      </Fragment>
     );
  }
}
 
export default DesPractice;