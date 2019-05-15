import React, { Component, Fragment as F } from 'react';
import Graph from './Graph';
import UserId4Profile from './UserId4Profile'
import {fetchUserGames} from '../actions/game'
import {connect} from 'react-redux'
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount(){
        this.props.setUserGames();
    }

    render() {

        return (
            <F>
                <div className="row  ">
                    <div className="col-6">
                <UserId4Profile/>
                
                </div>
                <div className="col-6">
                <Graph/>
                </div>
                </div>

            </F>
        );
    }
}

const mapStateToProps = ({ game, wordHistory }) => ({
    // views: game.views,
    // wordHistory
  });
  
  const mapDispatchToProps = dispatch => {
    return {
      setUserGames: () => dispatch(fetchUserGames()),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile);
  
