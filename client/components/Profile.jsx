import React, { Component, Fragment as F } from 'react';
import Graph from './Graph';
import UserId4Profile from './UserId4Profile'
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
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

export default Profile;