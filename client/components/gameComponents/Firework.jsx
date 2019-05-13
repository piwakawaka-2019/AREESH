import React, { Component } from 'react';

class Firework extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div className="pyro">
                 <div className="before"></div>
                 <div className="after"></div>
                </div>
            </div>
        );
    }
}

export default Firework;