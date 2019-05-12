import React, { Component, Fragment } from "react"

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
      <Fragment>
        <div className="card text-center my-5 ">
          <div className="card-body  ">
            <h5 className="card-title">Welcome!</h5>
            <p className="card-text">This app uses speech-recognition technology to help you test your memory and sharpen your spelling skills! Just tell the app the word you want to spell. It will display on your screen briefly before disappearing. Now over to you. Spell the word out loud, and AREESH will let you know if you got it right</p>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default About
