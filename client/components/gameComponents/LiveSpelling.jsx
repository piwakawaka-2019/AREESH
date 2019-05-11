import React, { Component, Fragment as F } from 'react';
import { connect } from "react-redux";
import {changeView} from '../../actions/game'

class LiveSpelling extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  changeView = (e) => {
    e.preventDefault()
    this.props.displayResults()
  }

  render() { 
    return ( 
      <F>
          <h1>Try to spell the word</h1>
          <button
            onClick={this.changeView}
            className="btn btn-outline-warning btn-rounded waves-effect"
          >
            View Results
          </button>
      </F>
     );
  }
}


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    displayResults: e => dispatch(changeView("displayResults"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveSpelling);