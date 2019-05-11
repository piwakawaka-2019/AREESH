import React, { Component, Fragment as F } from "react";
import { connect } from "react-redux";
import { changeView } from "../../actions/game";
import WhichWord from "./WhichWord";
import Home from "./Home";
import WordDefinition from "./WordDefinition";
import LiveSpelling from "./LiveSpelling";
import Results from "./Results";
import Winner from "./Winner";
class Game extends Component {
  constructor(props) {
    super(props);
    this.initialWord = {
        word: "",
        definition:
          "",
        // the time string needs to be converted back to a date object upon extraction
        startTime:
          "",
        attemptDuration: null,
        lettersCorrect: [],
        wordCorrect: false
    }
    this.state = {
      currentWord: this.initialWord
    };
  }

  setCurrentWord = (word) => {
    this.setState({
      currentWord: {
        ...this.state.currentWord,
        word
      }
    })
  }



  restart = () => {
    this.setState({
      currentWord:this.initialWord
    })

    this.props.displayHome();
  };

  render() {
    const { views } = this.props;
    console.log('game state:', this.state.currentWord);
    return (
      <F>
        <button
          className="btn btn-outline-danger btn-rounded waves-effect restart-game"
          onClick={this.restart}
        >
          Restart
        </button>
        <div className="text-center">
          {views.displayHome && <Home />}
          {views.displayWhichWord && <WhichWord setCurrentWord={this.setCurrentWord}/>}
          {views.displayWordDefinition && <WordDefinition/>}
          {views.displayLiveSpelling && <LiveSpelling />}
          {views.displayResults && <Results />}
          {views.displayWinner && <Winner />}
        </div>
      </F>
    );
  }
}

const mapStateToProps = ({ game }) => ({
  views: game.views
});

const mapDispatchToProps = dispatch => {
  return {
    displayHome: e => dispatch(changeView("displayHome"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
