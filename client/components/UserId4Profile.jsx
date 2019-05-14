import React, { Component ,Fragment as F} from 'react';
class UserId4Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <F>
                
                        <div className="card mt-4 mb-4">

                        <img className="card-img-top" src="./images/Des.jpg" alt="Card image cap"></img>

                        <div className="card-body">

                        <h4 className="card-title">Card title</h4>
                       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      
                         </div>
                   
             </div>
            </F>
        );
    }
}

export default UserId4Profile;
