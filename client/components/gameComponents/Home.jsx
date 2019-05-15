import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { changeView } from "../../actions/game";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () =>{
    this.props.displayWhichWord()
  }

  render() {
    const { displayWhichWord } = this.props;
    
    return (
      <Fragment>
        <div className="view">
          <p className="title4content">
            <strong>INSTRUCTIONS</strong>
          </p>
          <ul className="card-text" className="instructions">
            <li>
              Fusing speech-recognition technology and your brainpower together
              to help you sharpen your spelling skills test and your memory  
            </li>
            <br />
            <li>Let the app know the word you want to learn</li><br />
            <li>We will display the definition of what we <i>think</i> you said so you can make sure we got it right</li><br />
            <li>
              Now over to you. Spell the word out loud and AREESH will let you
              know if you got it right
            </li><br />
            <li>
              Log in to keep a hold of your score and compete against
              other willing learners!
            </li>
          </ul>
        </div>
        <br/>
        <div className="d-flex justify-content-center">
          <button
            onClick={this.handleClick}
            onClick={displayWhichWord}
            type="button"
            className="btn-floating btn-grey btn-sm waves-effect"
          >
             play <i className="fas fa-gamepad" />
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
