import React, { Component, Fragment } from "react";
import { ReactMic } from "react-mic";
import { sendBlob } from "../../apis/speech";
import request from "superagent";
import { connect } from "react-redux";
import { changeView, setWord, setDefinitions } from "../../actions/game";
import { getDefinitions } from "../../apis/dictionary";

class WhichWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: false,
      blobURL: null,
      word: "",
      error: ""
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
    //this is where youll send the data
    // this.setState({ blobURL: recordedBlob.blobURL });
    request.get(recordedBlob.blobURL).then(res => {});

    sendBlob(recordedBlob);
  }
  onSave = blobObject => {};

  onData(recordedBlob) {
    // console.log("chunck of realtime data is ", recordedBlob);
  }

  //****************************************************** */
  //Text input
  submit = e => {
    e.preventDefault();
    this.setState({ error: "" });
    this.props.setWord(this.state.word);
    getDefinitions(this.state.word, this.validateWord);
  };

  validateWord = definitions => {
    console.log(definitions);
    if (definitions) {
      this.props.setDefinitions(definitions);
      this.props.displayWordDefinition();
    } else {
      this.setState({ error: "Invalid word, please try again." });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //****************************************************** */

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <form className="md-form" onSubmit={this.submit}>
          <input
            type="text"
            name="word"
            id="validationServer043"
            className={`form-control ${this.state.error && 'is-invalid'}`}
            onChange={this.handleChange}
          />
          <label htmlFor="validationServer043">Enter the word you'd like to spell</label>
          <div class="invalid-feedback">Please provide a valid Word.</div>


          <button
            type="submit"
            className="btn btn-outline-warning btn-rounded waves-effect"
          >
            Confirm
          </button>
        </form>

        {/* <audio
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
        <button onClick={this.stopRecording}>Stop Recording</button> */}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    displayWordDefinition: e => dispatch(changeView("displayWordDefinition")),
    setWord: word => dispatch(setWord(word)),
    setDefinitions: definitions => dispatch(setDefinitions(definitions))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhichWord);
