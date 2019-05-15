import React, { Component, Fragment as F } from "react";
import { connect } from "react-redux";

import { changeView, resetGame } from "../../actions/game";

import Home from "./Home";
import WhichWord from "./WhichWord";
import WordDefinition from "./WordDefinition";
import LiveSpelling from "./LiveSpelling";
import Results from "./Results";
import Winner from "./Winner";

class Game extends Component {
  render() {
    const { views } = this.props;
    return (
      <F>
        <br />
          <div className="text-center">
            <div className="btn-floating btn-grey btn-sm waves-effect" id="score-count">
              score: {
                this.props.wordHistory.filter(wordData => wordData.wordCorrect)
                  .length
              }
            </div>
            {views.displayHome && <Home />}
            {views.displayWhichWord && <WhichWord />}
            {views.displayWordDefinition && <WordDefinition />}
            {views.displayLiveSpelling && <LiveSpelling />}
            {views.displayResults && <Results />}
            {views.displayWinner && <Winner />}
            
            </div>
        <br/>
        {/* <div className="d-flex justify-content-center">
          <button type="button"
          className="btn btn-outline-grey btn-rounded waves-effect restart-game"
          onClick={this.restart}
        >
          Restart
        </button>
        </div> */}
      </F>
    );
  }
}

const mapStateToProps = ({ game, wordHistory }) => ({
  views: game.views,
  wordHistory
});

const mapDispatchToProps = dispatch => {
  return {
    displayWhichWord: e => dispatch(changeView("displayWhichWord")),
    resetGame: e => dispatch(resetGame("displayWhichWord"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
