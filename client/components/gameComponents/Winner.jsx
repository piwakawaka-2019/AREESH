import React, { Component, Fragment as F } from 'react';
import { connect } from "react-redux";
import {changeView} from '../../actions/game';
import Firework from './Firework';
class Winner extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  changeView = (e) => {
    e.preventDefault()
    this.props.displayHome()
  }

  render() { 
    return ( 
      <F>
           <div class="card  m-4  p-3 text-center">
          <h1>Grats bro</h1>
          </div>
          <div className="d-flex justify-content-center">
              <button
                onClick={this.changeView}
                className="btn btn-outline-warning btn-rounded waves-effect"
              >
                Try again?
              </button>
              </div>
          <div>
            <Firework />
            </div>
        
      </F>

     );
  }
}


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    displayHome: e => dispatch(changeView("displayHome"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Winner);