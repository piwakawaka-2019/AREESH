import React, { Component, Fragment as F } from "react";
import { connect } from "react-redux";

import { changeView, setSpellingAttempt } from "../../actions/game";
import Dictaphone from "./Dictaphone";

class LiveSpelling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spellingAttempt: ""
    };

    // for text input version only
    //   this.handlechange = this.handleChange.bind(this);
    //   this.handleTextClick = this.handleTextClick.bind(this);
  }

  // changeView = e => {
  //   e.preventDefault();
  //   this.props.displayResults();
  // };

  // // for text input version only
  handleChange() {
    this.setState({
      spellingAttempt: e.target.value
    });
  }
  changeView = () => {};
  // // for text input version only
  // handleTextClick(e) {
  //   this.props.dispatchSpellingAttempt(this.state.spellingAttempt);
  //   this.changeView(e);
  // }
  handleDictaphone = word => {
    console.log(22, word);
    this.setState({ spellingAttempt: word.split(" ").join("") });
    //when you click confirm get it to check the answer
    this.props.dispatchSpellingAttempt(word.split(" ").join(""));
    this.props.displayResults();
  };

  render() {
    return (
      <F>
        <div className="card  m-4  p-3 text-center">
          {/* text input */}
          {/* <form>
            <input placeholder="spell the word here" onChange={(e) => this.handleChange(e)}></input>
            
            <button
            onClick={(e) => this.handleTextClick(e)}
            className="btn btn-outline-warning btn-rounded waves-effect"
          >
            Check your spelling!
          </button>
          </form> */}

          <Dictaphone setTest={this.handleDictaphone} />
        </div>
      </F>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    displayResults: () => dispatch(changeView("displayResults")),
    dispatchSpellingAttempt: spellingAttempt =>
      dispatch(setSpellingAttempt(spellingAttempt))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveSpelling);
