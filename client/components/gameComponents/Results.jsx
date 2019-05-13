import React, { Component, Fragment as F } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  transcribeSpeech,
  checkSpelling,
  speltCorrectly
} from "../../apis/speech";
import { changeView } from "../../actions/game";
import SplitText from "react-pose-text";

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // for speech-recognition version
      result: {
        word: "testaaaaaa",
        isCorrect: false
      },
      message: "The results are in...",
      letterSpeed: 400,
      resultsComplete: false
    };
    this.charPoses = {
      exit: { opacity: 0, y: -200 },
      enter: {
        opacity: 0.8,
        y: 0,
        delay: ({ charIndex }) => charIndex * this.state.letterSpeed
      }
    };

    this.handleClick = this.handleClick.bind(this);
    this.updateResult = this.updateResult.bind(this);
  }

  // for speech-recognition version
  handleClick() {
    transcribeSpeech("flacSonic.flac")
      .then(transcription => checkSpelling("sonic", transcription))
      .then(result => {
        this.setState({
          result: ""
        });
        result.forEach((letter, i) => {
          setTimeout(() => this.updateResult(letter), 750 * i);
        });
      });
  }

  updateResult(letter) {
    this.setState({
      result: this.state.result + letter
    });
  }

  componentDidMount(e) {
    let { word, spellingAttempt } = this.props;

    //let result = checkSpelling(word, spellingAttempt);

    let result = speltCorrectly(word, spellingAttempt);
    this.setState({
      result
    });

    setTimeout(() => {
      this.setState({ 
        resultsComplete: true,
        message: this.state.result.isCorrect ? "Grats Bro!":"Game-over man!"
       });

    }, this.state.letterSpeed * result.word.length);

    // result.forEach((letter, i) => {
    //   setTimeout(() => this.updateResult(letter), 750 * i);
    // });
  }

  changeView = e => {
    e.preventDefault();
    this.props.displayWinner();
  };

  render() {
    console.log(this.state.resultsComplete);
    const wordAnimation = (
      <div
        className={`resultsContainer ${!this.state.result.isCorrect &&
          "resultWrong"}`}
      >
        <SplitText initialPose="exit" pose="enter" charPoses={this.charPoses}>
          {this.state.result.word}
        </SplitText>
        <div />
      </div>
    );
    return (
      <F>
        {/* <button onClick={() => this.handleClick()}>Transcribe File</button> */}
        {/* <p>Answer: {this.state.result}</p> */}
        <h1>{this.state.message}</h1>
        {this.state.result && wordAnimation}
        <button
          onClick={this.changeView}
          className="btn btn-outline-warning btn-rounded waves-effect"
        >
          But did you win?
        </button>
      </F>
    );
  }
}

const mapStateToProps = state => ({
  word: state.game.wordData.word,
  spellingAttempt: state.game.wordData.spellingAttempt
});

const mapDispatchToProps = dispatch => {
  return {
    displayWinner: e => dispatch(changeView("displayWinner"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
