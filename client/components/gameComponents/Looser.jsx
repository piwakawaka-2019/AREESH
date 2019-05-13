import React, { Component } from 'react';

class Looser extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="sinir">
                <div className="box" id="box1">L</div>
                <div className="box" id="box2">O</div>
                <div className="box" id="box3">O</div>
                <div className="box" id="box4">S</div>
                <div className="box" id="box5">e</div>
                <div className="box" id="box6">R</div>
            </div>
        );
    }
}

export default Looser;