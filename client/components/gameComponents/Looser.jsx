import React, { Component } from 'react';

class Looser extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="sinir">
                <div className="box" id="box1"><img src="/images/boom.png" width="100" height="100"  alt="Card image cap"></img> </div>
                <div className="box" id="box2"><img src="/images/boom.png" width="150" height="150"  alt="Card image cap"></img></div>
                <div className="box" id="box3"><img src="/images/boom.png" width="150" height="150" alt="Card image cap"></img></div>
                <div className="box" id="box4"><img src="/images/boom.png" width="50" height="50" alt="Card image cap"></img></div>
                <div className="box" id="box5"><img src="/images/boom.png" width="75" height="75" alt="Card image cap"></img></div>
            </div>
        );
    }
}

export default Looser;