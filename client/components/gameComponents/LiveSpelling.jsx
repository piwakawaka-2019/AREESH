import React, { Component, Fragment as F } from 'react'
import { connect } from "react-redux"

import {changeView, setSpellingAttempt} from '../../actions/game'

class LiveSpelling extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      spellingAttempt: ""
     }

    // for text input version only
    this.handlechange = this.handleChange.bind(this)
    this.handleTextClick = this.handleTextClick.bind(this)
  }

  changeView = (e) => {
    e.preventDefault()
    this.props.displayResults()
  }

  // for text input version only
  handleChange (e) {
    this.setState({
      spellingAttempt: e.target.value
    })
  }

  // for text input version only
  handleTextClick (e) {
    this.props.dispatchSpellingAttempt(this.state.spellingAttempt)
    this.changeView(e)
  }

  render() { 
    return ( 
      <F>
        <div className="card  m-4  p-3 text-center ">
          <form>
            <br></br>
            <br></br>
            <br></br>
           
            
            <input placeholder="spell the word here" onChange={(e) => this.handleChange(e)}></input>
            <button
            onClick={(e) => this.handleTextClick(e)}
            className="btn-floating btn-grey btn-sm waves-effect px-3"
          ><i className="far fa-grin-tongue-wink"></i>
          
          </button>
          <br></br>
            <br></br>
            <br></br>
            <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
          </form>
          {/* <img className="card-image" src="/images/bk.png" alt="Card image cap"></img>  */}
        </div>
      </F>
     )
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    displayResults: e => dispatch(changeView("displayResults")),
    dispatchSpellingAttempt: spellingAttempt => dispatch(setSpellingAttempt(spellingAttempt))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveSpelling)