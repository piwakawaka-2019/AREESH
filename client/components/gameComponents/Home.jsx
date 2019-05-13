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
          <div className ="view">
             
                <p className="title4content">Welcome!</p>
                <p className="card-text">
                AREESH uses speech-recognition technology to help you test your memory and sharpen your spelling skills! Just tell the app the word you want to spell. It will display on your screen briefly before disappearing. Now over to you. Spell the word out loud, and AREESH will let you know if you got it right
                </p>
            </div>
          </div>  
           <img className="card-image" src="/images/bk.png" alt="Card image cap"></img> 
        </div>
        <div className="d-flex justify-content-center">
          <button
            onClick={displayWhichWord}
            type="button"
            className="btn-floating btn-yellow btn-sm waves-effect px-3"
          ><i className="fas fa-gamepad"></i>
           
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
