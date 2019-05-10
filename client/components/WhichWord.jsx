import React, { Component, Fragment } from "react";
import { ReactMic } from "react-mic";

class WhichWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
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
    this.setState({ record: true });
  };

  stopRecording = () => {
    this.setState({ record: false });
  };

  onStop(recordedBlob) {
    console.log("recordedBlob is ", recordedBlob);
    //this is where youll send the data
  }

  onData(recordedBlob) {
    console.log("chunck of realtime data is ", recordedBlob);
  }

  render() {
    return (
      <Fragment>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
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
