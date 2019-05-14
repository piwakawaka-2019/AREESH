import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { getDefinitions } from "../../apis/dictionary";
import { changeView, setWord, setDefinitions } from "../../actions/game";
import Dictaphone from "./Dictaphone";

class WhichWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      blobURL: null,
      word: "",
      error: "",
      transcription: "",
      displayDefinition: false
    };

    this.toggleDefinitionDisplay = this.toggleDefinitionDisplay.bind(this);
  }

  handleTranscription() {
    this.props.setWord(this.state.word);
  }

  handleTest = transcription => {
    let maskedWord = "*";

    for (var i = 0; i < transcription.length - 1; i++) {
      maskedWord += "*";
    }

    this.setState({
      word: transcription
    });
  };

  toggleDefinitionDisplay(displayStatus) {
    this.setState({
      displayDefinition: displayStatus
    });
  }
  //****************************************************** */
  //Text input
  submit = e => {
    e.preventDefault();
    this.setState({ error: "" });
    this.props.setWord(this.state.word);
    getDefinitions(this.state.word, this.validateWord);
  };

  validateWord = definitions => {
    if (definitions) {
      this.props.setDefinitions(definitions);
    } else {
      this.setState({ error: "Please provide a valid word" });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //****************************************************** */

  render() {
    const definitionDisplay = (
      <Fragment>
        <p>{this.props.definitions[0]}</p>
        <button onClick={this.props.displayLiveSpelling}>✓</button>
      </Fragment>
    );

    return (
      <Fragment>
         
          <form className="md-form" onSubmit={this.submit}>
            {/*SPEECH TO TEXT*/}
            <Dictaphone
              setTest={this.handleTest}
              toggleDefinitionDisplay={this.toggleDefinitionDisplay}
            />
            <p>{this.state.error}</p>
            <div className="invalid-feedback">Please provide a valid Word.</div>
            <div
              type="text"
              name="word"
              id="validationServer043"
              className={`form-control ${this.state.error && "is-invalid"}`}
              className="hidden-div"
              onChange={this.handleChange}
              value={this.state.test}
            >
              {this.state.test}
            </div>
            {this.state.displayDefinition && definitionDisplay}

            {/*SPEECH TO TEXT*/}

            {/*TEXT INPUT*/}
            {/* <input
            type="text"
            name="word"
            id="validationServer043"
            className={`form-control ${this.state.error && "is-invalid"}`}
            onChange={this.handleChange}
            value={this.state.test}
          /> */}
            {/* <label htmlFor="validationServer043">
            Enter the word you'd like to spell
          </label> */}
            {/*TEXT INPUT*/}

            {/* <button
              type="submit"
              className="btn btn-outline-warning btn-rounded waves-effect"
            >
              Confirm
            </button> */}
          </form>
          {/* <img className="card-image" src="/images/bk.png" alt="Card image cap"></img>  */}
           
            
            
      
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  definitions: state.game.wordData.definitions
});

const mapDispatchToProps = dispatch => {
  return {
    displayLiveSpelling: e => dispatch(changeView("displayLiveSpelling")),
    setWord: word => dispatch(setWord(word)),
    setDefinitions: definitions => dispatch(setDefinitions(definitions))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhichWord);
