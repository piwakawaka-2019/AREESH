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
    currentPage,
    wordConfirmed,
    LiveSpellingOn,
    clearDefinition,
    definitions
  }) => {

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    clearTranscriptOnViewLoad(LiveSpellingOn, resetTranscript)

    startListening()

    return (
      <div>

        <span id="transcript">
          {transcriptionMasked? maskTranscript(transcript):transcript}
        </span>

        <br />  
        <button
          className="btn-floating btn-grey btn-sm waves-effect"
          onClick={() => {
            setTest(transcript);
            resetTranscript();
            clearDefinition()
            toggleDefinitionDisplay(true)
          }}
        >
          {currentPage == "WhichWord"? "check definition ": "submit "}
          <i className="far fa-hand-rock" />
        </button>
        <button
          className="btn-floating btn-grey btn-sm waves-effect"
          onClick={() => {
            resetTranscript()
            toggleDefinitionDisplay(false)
          }}
        >clear <i className="fas fa-redo-alt" /></button>
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

let resetTranscriptSwitch = true

function clearTranscriptOnViewLoad (LiveSpellingOn, resetTranscript) {
  if(LiveSpellingOn != resetTranscriptSwitch){
    resetTranscript()
    resetTranscriptSwitch = LiveSpellingOn
  }
}

Dictaphone.propTypes = propTypes;

export default SpeechRecognition({ autoStart: false })(Dictaphone);
