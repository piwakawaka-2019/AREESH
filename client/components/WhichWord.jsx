import React, { Component, Fragment } from "react";
import { ReactMic } from "react-mic";
import { sendBlob } from "../apis/speech";
import request from "superagent";

class WhichWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      blobURL: null
    };
  }

  // async getAudio() {
  //   let stream = null;
  //   const constraints = { audio: true, video: false };
  //   try {
  //     stream = await navigator.mediaDevices.getUserMedia(constraints);
  //     console.log(stream);
  //   } catch (err) {
  //     console.log(err.name, err.message);
  //   }
  // }

  startRecording = () => {
    this.setState({ isRecording: true });
  };

  stopRecording = () => {
    this.setState({ isRecording: false });
  };

  onStop(recordedBlob) {
    // console.log("Blob: ", recordedBlob);
    // this is where youll send the data
    // this.setState({ blobURL: recordedBlob.blobURL });
    request.get(recordedBlob.blobURL).then(res => {
      // console.log("BlobURL response: ", res);
      sendBlob(res);
    });
  }

  onSave = blobObject => {
  };

  onData(recordedBlob) {
    // console.log("chunck of realtime data is ", recordedBlob);
  }

  render() {
    return (
      <Fragment>
        <audio
          ref="audioSource"
          controls="controls"
          src="blob:http://localhost:3000/#/60c5e2b1-6b3f-4e56-bad8-df62453a5dcb"
        />
        <ReactMic
          record={this.state.isRecording}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          onSave={this.onSave}
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
        <button onClick={this.startRecording}>Start Recording</button>
        <button onClick={this.stopRecording}>Stop Recording</button>
      </Fragment>
    );
  }
}

export default WhichWord;
