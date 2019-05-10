import React, { Component, Fragment } from 'react';

class StartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Fragment>
        <button type="button" class = "btn btn-outline-warning btn-rounded waves-effect">Start</button>
      </Fragment>
     );
  }
}
 
export default StartButton;