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
  setTest,
  startListening
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  startListening()
  return (
    <div>
      <button
        className="btn-floating btn-grey btn-sm waves-effect"
        onClick={() => {
          setTest(transcript);
        }}
      >
        <i className="fas fa-check" />
      </button>
      <button
        className="btn-floating btn-grey btn-sm waves-effect"
        onClick={resetTranscript}
      >
        <i className="fas fa-times" />
      </button>
      <br />

      <span id="transcript">{transcript}</span>

      {/* <button className="btn-floating btn-grey btn-sm  waves-effect" onClick={() => handleClick()}><i className="far fa-hand-rock"></i></button> */}
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition({ autoStart: false })(Dictaphone);
