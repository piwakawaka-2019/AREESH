import React, { Component, Fragment } from "react";
import StartButton from "./StartButton";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
            
          

            <div class="card text-center my-5 ">
          
                <div class="card-body  ">
                  <h5 class="card-title">Welcome!</h5>
                  <p class="card-text">Here is some instruction to how to start the game.
                  firstfdsfdsdsfasdfdsfdsgsdgsdffsadgasdgsdgdsgsdgsgsdgsgssdgdsgsdgsdsd
                  gdasgagasdgsdagdsgdsgadsgdsgsdgerherhrtjrtjtryjtykyukuykyukuykdtyudrt
                  ghsrtujertiueiykytdktyfkyulyuluylyuluilyuluylyguyhjdtrhjtrdyseysererster</p>
                
                </div>
            
                </div>
                <div class="d-flex justify-content-center">
                <StartButton />
                </div>
            
      </Fragment>
    );
  }
}

export default About;
