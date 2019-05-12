import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
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
        test
      </button>
      <button onClick={resetTranscript}>Reset</button>
      <br />
      <span id="transcript">{transcript}</span>
      <button onClick={() => handleClick()}>Grab text</button>
    </div>
  );
};

function handleClick() {
  console.log("handling click");
  let userText = transcript;
  console.log(userText.innerHTML);
}

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);
