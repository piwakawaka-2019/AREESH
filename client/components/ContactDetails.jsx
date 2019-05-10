import React, { Component, Fragment } from 'react';

import { Link } from "react-router-dom";

class ContactDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <div className="card card-cascade wider">
                    <div className="view view-cascade overlay">
                        <img  className="card-img-top" src="/images/Vinnie.jpg" alt="Card image cap" />
                    </div>
                    <div className="card-body card-body-cascade text-center pb-0">
                        <h4 className="card-title"><strong>Alison Belmont</strong></h4>
                        <h5 className="blue-text pb-2"><strong>Graffiti Artist</strong></h5>
                        <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
                        <a className="px-2 fa-lg li-ic"><i className="fab fa-linkedin-in"></i></a>
                        <a className="px-2 fa-lg tw-ic"><i className="fab fa-twitter"></i></a>
                        <a className="px-2 fa-lg fb-ic"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
                <div className="card card-cascade narrower">
                    <div className="view view-cascade overlay">
                        <img  className="card-img-top" src="images/Jess.jpg" alt="Card image cap" />
                    </div>
                    <div className="card-body card-body-cascade">
                        <h5 className="pink-text pb-2 pt-1"><i className="fas fa-utensils"></i> Culinary</h5>
                        <h4 className="font-weight-bold card-title">Cheat day inspirations</h4>
                        <p className="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
                        <a className="btn btn-unique">Button</a>
                    </div>
                </div>
                <div className="card card-cascade">
                    <div className="view view-cascade overlay">
                        <img className="card-img-top mask rgba-white-slight" src="/images/Des.jpg" alt="Card image cap"> /</img>
                    </div>
                    <div className="card-body card-body-cascade text-center">
                        <h4 className="card-title"><strong>Billy Coleman</strong></h4>
                        <h6 className="font-weight-bold indigo-text py-2">Web developer</h6>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
                        </p>
                        <a type="button" className="btn-floating btn-small btn-fb"><i className="fab fa-facebook-f"></i></a>
                        <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-twitter"></i></a>
                        <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fab fa-dribbble"></i></a>
                    </div>
                </div>
            </Fragment>
        )
    }
}
   
export default ContactDetails;
