import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import { connect } from "react-redux";
import { thisTypeAnnotation } from "@babel/types";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  setTest
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div>
      <button
        className="btn-floating btn-grey btn-sm waves-effect"
        onClick={() => {
          setTest(transcript);
        }}
      >
        <i className="far fa-hand-rock" />
      </button>
      <button
        className="btn-floating btn-grey btn-sm waves-effect"
        onClick={resetTranscript}
      >
        <i className="fas fa-redo-alt" />
      </button>
      <br />
      <span id="transcript">{transcript}</span>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);
