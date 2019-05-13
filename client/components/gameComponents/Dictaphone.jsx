import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import { connect } from "react-redux"
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
        onClick={() => {
          setTest(transcript);
        }}
      >
        Correct word!
      </button>
      <button onClick={resetTranscript}>Nope, let me say it again!</button>
      <br />
      <span id="transcript">{transcript}</span>
    </div>
  );
};

Dictaphone.propTypes = propTypes

export default SpeechRecognition(Dictaphone)
