import React, { Component, Fragment } from 'react';

class LiveSpelling extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      transcribedWord: ""
     }

     this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log("button clicked!")

    
    // this.setState({
    //   transcribedWord: "Clicked!"
    // })
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