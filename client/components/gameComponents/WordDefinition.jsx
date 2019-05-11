import React, { Component, Fragment as F } from 'react';
import { connect } from "react-redux";
import {changeView} from '../../actions/game'
import { getDefinitions } from "../../apis/dictionary";

class WordDefinition extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      definitions: []
     }
  }

  componentDidMount(){
    getDefinitions('apple',this.setDefinitions)
  }

  setDefinitions = (definitions) => {
    this.setState({definitions}) 
  }

  changeView = (e) => {
    e.preventDefault()
    this.props.displayLiveSpelling()
  }

  render() { 
    console.log(this.state);
    return ( 
      <F>
           <h1>Word Definition</h1>
          <button
            onClick={this.changeView}
            className="btn btn-outline-warning btn-rounded waves-effect"
          >
            Start Spelling
          </button>
      </F>
     );
  }
}


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    displayLiveSpelling: e => dispatch(changeView("displayLiveSpelling"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordDefinition);