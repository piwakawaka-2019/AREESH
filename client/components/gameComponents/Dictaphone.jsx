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
     
   
      <button className="btn-floating btn-grey btn-sm waves-effect"
        onClick={() => {
          setTest(transcript);
        }}
      ><i class="fas fa-check"></i>
      </button> 
      <button className="btn-floating btn-grey btn-sm waves-effect"
       onClick={resetTranscript}><i className="fas fa-times"></i></button>
       <br></br>
      
      <span id="transcript">{transcript}</span>
    
    {/* <button className="btn-floating btn-grey btn-sm  waves-effect" onClick={() => handleClick()}><i className="far fa-hand-rock"></i></button> */}
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);
