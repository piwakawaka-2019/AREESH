import React, { Component, Fragment } from "react";
import {changeView} from '../../actions/game'
import WhichWord from "./WhichWord";
import { connect } from "react-redux";

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
              Here is some instruction to how to start the game.
              firstfdsfdsdsfasdfdsfdsgsdgsdffsadgasdgsdgdsgsdgsgsdgsgssdgdsgsdgsdsd
              gdasgagasdgsdagdsgdsgadsgdsgsdgerherhrtjrtjtryjtykyukuykyukuykdtyudrt
              ghsrtujertiueiykytdktyfkyulyuluylyuluilyuluylyguyhjdtrhjtrdyseysererster
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
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    displayWhichWord: e => dispatch(changeView("displayWhichWord"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
