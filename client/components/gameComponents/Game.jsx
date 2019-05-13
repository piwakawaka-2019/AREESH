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
       
        <div className="text-center">
          {views.displayHome && <Home />}
          {views.displayWhichWord && <WhichWord />}
          {views.displayWordDefinition && <WordDefinition/>}
          {views.displayLiveSpelling && <LiveSpelling />}
          {views.displayResults && <Results />}
          {views.displayWinner && <Winner />}
        </div> 
        <div className="d-flex justify-content-center">
          <button
          className="btn-floating btn-grey btn-sm waves-effect px-3" onClick={this.props.resetGame}><i className="fas fa-rocket" aria-hidden="true">
         
          </i>
        </button>
        </div>
      </F>
    )
  }
}

const mapStateToProps = ({ game }) => ({
  views: game.views
})

const mapDispatchToProps = dispatch => {
  return {
    displayWhichWord: e => dispatch(changeView("displayWhichWord")),
    resetGame: e => dispatch(resetGame("displayWhichWord"))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
