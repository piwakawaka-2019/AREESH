import React, { Component, Fragment as F } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { transcribeSpeech, checkSpelling } from "../../apis/speech";
import { changeView } from "../../actions/game";
import SplitText from "react-pose-text";
import ReactCountdownClock from "react-countdown-clock";

const charPoses = {
  exit: { opacity: 0, y: -200 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 100
  }
};

export function ResultAnimation() {
  return (
    <div className="resultsContainer">
      <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
        ELECTRICITY
      </SplitText>
      <div></div>

    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    displayWinner: e => dispatch(changeView("displayWinner"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultAnimation);
