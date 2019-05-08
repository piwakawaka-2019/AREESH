import React, { Component } from 'react';
import Timer from './Timer'
import YesOrNo from './YesOrNo'
class GamePage2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Timer />
                <YesOrNo />
            </div>
        );
    }
}

export default GamePage2;