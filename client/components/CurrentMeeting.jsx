import React from 'react'
import {connect} from 'react-redux'

function CurrentMeeting (props) {
  return <div className="container">
    <h2 className="title is-2">Your meeting has begun</h2>
  </div>



}

export default connect()(CurrentMeeting)


//NOTE: this component doesn't have an exiting react route