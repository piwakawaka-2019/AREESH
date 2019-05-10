import React, { Component, Fragment } from 'react';
import About from "./About";
import StartButton from "./StartButton";
import WhichWord from './WhichWord'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Fragment>
        <About />
        <StartButton />
        {/* remove later */}
        <WhichWord/>
      </Fragment>
     );
  }
}
 
export default Home;