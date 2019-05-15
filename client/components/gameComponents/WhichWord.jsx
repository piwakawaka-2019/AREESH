import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Radar from "../Radar"

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
      displayDefinition: false,
      transcriptionMasked: true
    };

    this.toggleDefinitionDisplay = this.toggleDefinitionDisplay.bind(this);
    this.handleWordApproved = this.handleWordApproved.bind(this);
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

  handleWordApproved() {
    this.toggleWordMasking();
  }

  toggleWordMasking() {
    this.setState({
      transcriptionMasked: !this.state.transcriptionMasked
    });
    this.props.displayLiveSpelling();
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

  parseDefinition(definition) {
    if (definition) {
      console.log(33, definition);
      console.log(22, definition.slice(0, 3));
      // switch (definition) {
      //   case definition[0] == "n":
      //     return "Noun: " + definition.slice(2);
      //   default:
      //     return definition;
      // }
      if (definition[0] == "n") {
        return (
          <p>
            <i>noun: </i>
            {definition.slice(2)}
          </p>
        );
      } else if (definition.slice(0, 3) == "adj") {
        return (
          <p>
            <i>adjective: </i>
            {definition.slice(3)}
          </p>
        );
      } else if (definition.slice(0, 3) == "adv") {
        return (
          <p>
            <i>adverb: </i>
            {definition.slice(3)}
          </p>
        );
      } else {
        return definition;
      }
    } else {
      return "";
    }
  }
  //****************************************************** */

  render() {
    const definitionDisplay = (
      <Fragment>
        <p>{this.parseDefinition(this.props.definitions[0])}</p>
        <button onClick={this.handleWordApproved}>✓</button>
      </Fragment>
    );

    return (
      <Fragment>
        <br />
        <h2>Say a word you'd like to spell</h2>
        <form className="md-form" onSubmit={this.submit}>
          {/*SPEECH TO TEXT*/}
          <Dictaphone
            setTest={this.handleTest}
            toggleDefinitionDisplay={this.toggleDefinitionDisplay}
            transcriptionMasked={this.state.transcriptionMasked}
          />
          <Radar/>
          {/* <img src="images/listening.gif" style={{ width: 100 }} /> */}
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
        </form>
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
