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
  toggleDefinitionDisplay,
  transcriptionMasked,
  recognition
}) => {
  console.log(recognition);
  recognition.grammars.src =
    "#JSGF V1.0; grammar letters; public <letters> = a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z ;";
  if (!browserSupportsSpeechRecognition) {
    return <p>please switch to chrome to play this game</p>;
  }
  startListening();
  return (
    <div>
      <button
        className="btn-floating btn-grey btn-sm waves-effect"
        onClick={() => {
          setTest(transcript);
          resetTranscript();
          toggleDefinitionDisplay(true);
        }}
      >
        <i className="far fa-hand-rock" />
      </button>
      <button
        className="btn-floating btn-grey btn-sm waves-effect"
        onClick={() => {
          resetTranscript();
          toggleDefinitionDisplay(false);
        }}
      >
        <i className="fas fa-redo-alt" />
      </button>
      <br />
      <span id="transcript">
        {transcriptionMasked && maskTranscript(transcript)}
        {!transcriptionMasked && transcript}
      </span>
    </div>
  );
};

function maskTranscript(transcript) {
  let maskedTranscript = "";

  for (var i = 0; i < transcript.length; i++) {
    maskedTranscript += "*";
  }

  return maskedTranscript;
}

Dictaphone.propTypes = propTypes;

export default SpeechRecognition({ autoStart: false })(Dictaphone);
