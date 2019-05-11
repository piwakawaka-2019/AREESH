import React, { Component, Fragment as F } from 'react';
import { connect } from "react-redux";
import {changeView} from '../../actions/game'

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
          <h1>Grats bro</h1>
          <button
            onClick={this.changeView}
            className="btn btn-outline-warning btn-rounded waves-effect"
          >
            Try again?
          </button>
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