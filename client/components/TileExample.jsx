import React, { Component } from "react";
import Scrabblefy from "react-scrabblefy";
class TileExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: "btn btn-light"
    };
  }
  handleClick = () => {
    this.setState({ buttonColor: "btn btn-danger" });
  }
  handleHover = () => {
    this.setState({ buttonColor: "btn btn-info" });
  }
  render() {
    return (
      <div>
        <p>start of tile example</p>
        <Scrabblefy word="SCRABBLEFY" size={50} align="left" />

        <button className={this.buttonColor} onClick={this.handleClick} onMouseEnter={this.handleHover}>H</button>

        <p>end of tile example</p>
      </div>
    )}
}

export default TileExample;
