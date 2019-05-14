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
    this.setState({ spellingAttempt: word.split(" ").join("") });
    //when you click confirm get it to check the answer
    this.props.dispatchSpellingAttempt(word.split(" ").join(""));
    this.props.displayResults();
  };

  render() {
    return (
      <F>
        {/* <form>
            <br></br>
            <br></br>
            <br></br>
           
            <Dictaphone setTest={this.handleDictaphone} />
            {/* <input placeholder="spell the word here" onChange={(e) => this.handleChange(e)}></input> */}
            
            {/* <button
            onClick={(e) => this.handleTextClick(e)}
            className="btn-floating btn-grey btn-sm waves-effect px-3"
          ><i className="far fa-grin-tongue-wink"></i>
          
          </button>
          </form> */}
        <br />
        <h2>Spell the word</h2>
        <Dictaphone setTest={this.handleDictaphone} />
        <img src="images/listening.gif" style={{ width: 100 }} />
        {/* </form> */}
        {/* <img className="card-image" src="/images/bk.png" alt="Card image cap"></img>  */}
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
