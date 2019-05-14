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
  startListening,
  setTest,
  toggleDefinitionDisplay
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
          resetTranscript();
          toggleDefinitionDisplay(true)
        }}
      >
        <i className="far fa-hand-rock" />
      </button>
      <button
        className="btn-floating btn-grey btn-sm waves-effect"
        onClick={() => {
          resetTranscript()
          toggleDefinitionDisplay(false)
        }}
      >
        <i className="fas fa-redo-alt" />
      </button>
      <br />
      <span id="transcript">{maskTranscript(transcript)}</span>
    </div>
  );
};

function maskTranscript (transcript) {
  let maskedTranscript = ''

  for(var i =0; i< transcript.length; i++){
    maskedTranscript += '*'
  }

  return maskedTranscript
}

Dictaphone.propTypes = propTypes;

export default SpeechRecognition({ autoStart: false })(Dictaphone);
