import React, { Component, Fragment as F } from "react"
import { connect } from "react-redux"

import { changeView, resetGame } from "../../actions/game"

import Home from "./Home"
import WhichWord from "./WhichWord"
import WordDefinition from "./WordDefinition"
import LiveSpelling from "./LiveSpelling"
import Results from "./Results"
import Winner from "./Winner"

class Game extends Component {

  render() {
    const { views } = this.props;

    return (
      <F>
        <button
          className="btn btn-outline-danger btn-rounded waves-effect restart-game"
          onClick={this.props.resetGame}
        >
          Restart
        </button>
        <div className="text-center">
          {views.displayHome && <Home />}
          {views.displayWhichWord && <WhichWord />}
          {views.displayWordDefinition && <WordDefinition/>}
          {views.displayLiveSpelling && <LiveSpelling />}
          {views.displayResults && <Results />}
          {views.displayWinner && <Winner />}
        </div> 
        {/* <div className="d-flex justify-content-center">
          <button type="button"
          className="btn btn-outline-grey btn-rounded waves-effect restart-game"
          onClick={this.restart}
        >
          Restart
        </button>
        </div> */}
      </F>
    )
  }
}

const mapStateToProps = ({ game }) => ({
  views: game.views
})

const mapDispatchToProps = dispatch => {
  return {
    displayHome: e => dispatch(changeView("displayHome")),
    resetGame: e => dispatch(resetGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
