import React, { Component } from 'react';

class Firework extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div class="pyro">
                 <div class="before"></div>
                 <div class="after"></div>
                </div>
            </div>
        );
    }
}

export default Firework;