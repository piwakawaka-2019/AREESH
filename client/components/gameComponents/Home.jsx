import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { changeView } from "../../actions/game";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () =>{
    console.log("handling click")
    
    this.props.displayWhichWord()
  }

  render() {
    const { displayWhichWord } = this.props;
    return (
      <Fragment>
        <div className="view">
          <p className="title4content">
            <strong>INSTRUCTIONS/INFORMATION</strong>
          </p>
          <ul className="card-text">
            <li>
              Fusing speech-recognition technology and your knowledge together
              to help you test your memory and sharpen your spelling skills!
            </li>
            <li>Let the app know the word you want to learn</li>
            <li>It will briefly display on your screen before disappearing</li>
            <li>
              Now over to you, spell the word out loud and AREESH will let you
              know if you got it right or wrong
            </li>
            <li>
              Login/Register to keep a hold of your score and compete against
              other willing learners like yourself
            </li>
          </ul>
        </div>
        <br/>
        <div className="d-flex justify-content-center">
          <button
            onClick={this.handleClick}
            onClick={displayWhichWord}
            type="button"
            className="btn-floating btn-yellow btn-sm waves-effect px-3"
          >
            <i className="fas fa-gamepad" /> Play
          </button>
        </div>
        <br/>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  LiveSpellingOn: state.LiveSpellingOn
});

const mapDispatchToProps = dispatch => {
  return {
    displayWhichWord: e => dispatch(changeView("displayWhichWord"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
