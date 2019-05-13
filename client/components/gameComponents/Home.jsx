import React, { Component, Fragment } from "react"
import { connect } from "react-redux"

import {changeView} from '../../actions/game'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {displayWhichWord} = this.props
    return (
      <Fragment>
        <div className="card text-center my-5 ">
          <div className="card-body  ">
            <h5 className="card-title">Welcome!</h5>
            <p className="card-text">
            AREESH uses speech-recognition technology to help you test your memory and sharpen your spelling skills! Just tell the app the word you want to spell. It will display on your screen briefly before disappearing. Now over to you. Spell the word out loud, and AREESH will let you know if you got it right
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            onClick={displayWhichWord}
            type="button"
            className="btn btn-outline-warning btn-rounded waves-effect"
          >
            Start
          </button>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    displayWhichWord: e => dispatch(changeView("displayWhichWord"))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
