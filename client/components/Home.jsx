import React, { Component, Fragment } from 'react';
import About from "./About";



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Fragment>
        <About />
       
      </Fragment>
     );
  }
}
 
export default Home;