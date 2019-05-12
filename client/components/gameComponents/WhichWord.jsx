import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import Dictaphone from "./Dictaphone";

import { getDefinitions } from "../../apis/dictionary"
import { changeView, setWord, setDefinitions } from "../../actions/game"


class WhichWord extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRecording: false,
      blobURL: null,
      word: "",
      error: ""
    }
  }

  //****************************************************** */
  //Text input
  submit = e => {
    e.preventDefault();
    this.setState({ error: "" })
    this.props.setWord(this.state.word)
    getDefinitions(this.state.word, this.validateWord)
  }

  validateWord = definitions => {
    if (definitions) {
      this.props.setDefinitions(definitions);
      this.props.displayWordDefinition();
    } else {
      this.setState({ error: "Invalid word, please try again." })
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  //****************************************************** */

  render() {
    return (
      <Fragment>
        <div>
          <Dictaphone />
        </div>

        <form className="md-form" onSubmit={this.submit}>
          <input
            type="text"
            name="word"
            id="validationServer043"
            className={`form-control ${this.state.error && "is-invalid"}`}
            onChange={this.handleChange}
          />
          <label htmlFor="validationServer043">
            Enter the word you'd like to spell
          </label>
          <div className="invalid-feedback">Please provide a valid Word.</div>

          <button
            type="submit"
            className="btn btn-outline-warning btn-rounded waves-effect"
          >
            Confirm
          </button>
        </form>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {
    displayWordDefinition: e => dispatch(changeView("displayWordDefinition")),
    setWord: word => dispatch(setWord(word)),
    setDefinitions: definitions => dispatch(setDefinitions(definitions))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WhichWord);
