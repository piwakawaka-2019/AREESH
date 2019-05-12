import React, { Component, Fragment as F } from 'react';
import { connect } from "react-redux";
import {changeView, setSpellingAttempt} from '../../actions/game'

class LiveSpelling extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      spellingAttempt: ""
     }

    // for text input version only
    this.handlechange = this.handleChange.bind(this)
    this.handleTextClick = this.handleTextClick.bind(this)
  }

  changeView = (e) => {
    e.preventDefault()
    this.props.displayResults()
  }

  // for text input version only
  handleChange (e) {
    this.setState({
      spellingAttempt: e.target.value
    })
  }

  // for text input version only
  handleTextClick (e) {
    this.props.dispatchSpellingAttempt(this.state.spellingAttempt)
    this.changeView(e)
  }

  render() { 
    return ( 
      <F>
          <form>
            <input placeholder="spell the word here" onChange={(e) => this.handleChange(e)}></input>
            <button
            onClick={(e) => this.handleTextClick(e)}
            className="btn btn-outline-warning btn-rounded waves-effect"
          >
            Check your spelling!
          </button>
          </form>
      </F>
     );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    displayResults: e => dispatch(changeView("displayResults")),
    dispatchSpellingAttempt: spellingAttempt => dispatch(setSpellingAttempt(spellingAttempt))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveSpelling);