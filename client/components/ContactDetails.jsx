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
            <div className = "container">
                <div className="row m-4 ">
                       <div className="col-4">
                             <div className="card card-cascade">
                                      
                                      <img className="view view-cascade overlay card-img-top mask rgba-white-slight" src="/images/Des.jpg" alt="Card image cap"></img> 
                                      <div className="card-body card-body-cascade text-center">
                                          <h4 className="card-title"><strong>Des Whelan</strong></h4>
                                          <h6 className="font-weight-bold amber-text py-2">Product Owner</h6>
                                          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
                                          </p>
                                          <button type="button" className="fab fa-facebook-f btn-floating btn-small btn-fb "><i></i></button>
                                          <button type="button" className="fab fa-twitter btn-floating btn-small btn-tw"><i></i></button>
                                          <button type="button" className="fab fa-dribbble btn-floating btn-small btn-dribbble"><i></i></button>
                                      </div>
                              </div>
                        </div>
                    
                      <div className="col-4">       
                            <div className="card card-cascade">
                            <img className="view view-cascade overlay card-img-top mask rgba-white-slight" src="/images/Vinnie.jpg" alt="Card image cap"></img> 
                                <div className="card-body card-body-cascade text-center">
                                    <h4 className="card-title"><strong>Vinnie Reid</strong></h4>
                                    <h6 className="font-weight-bold amber-text py-2">Web developer</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
                                    </p>
                                    <button type="button" className="fab fa-facebook-f btn-floating btn-small btn-fb"><i></i></button>
                                          <button type="button" className="fab fa-twitter btn-floating btn-small btn-tw"><i></i></button>
                                          <button type="button" className="fab fa-dribbble btn-floating btn-small btn-dribbble"><i></i></button>
                                </div>
                            </div>
                      </div>   

                       <div className="col-4">       
                            <div className="card card-cascade">
                            <img className="view view-cascade overlay card-img-top mask rgba-white-slight" src="/images/Josh.jpg" alt="Card image cap"></img> 
                                <div className="card-body card-body-cascade text-center">
                                    <h4 className="card-title"><strong>Josh Gulliver</strong></h4>
                                    <h6 className="font-weight-bold amber-text py-2">Web developer</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
                                    </p>
                                    <button type="button" className="fab fa-facebook-f btn-floating btn-small btn-fb"><i></i></button>
                                          <button type="button" className="fab fa-twitter btn-floating btn-small btn-tw"><i></i></button>
                                          <button type="button" className="fab fa-dribbble btn-floating btn-small btn-dribbble"><i></i></button>
                                </div>
                            </div>
                        </div>   
                  </div>
                  <div className="row m-4">
                  <div className="col-sm-4">
                             <div className="card card-cascade">
                             <img className="view view-cascade overlay card-img-top mask rgba-white-slight" src="/images/Jesse.jpg" alt="Card image cap"></img> 
                                      <div className="card-body card-body-cascade text-center">
                                          <h4 className="card-title"><strong>Jesse Collier</strong></h4>
                                          <h6 className="font-weight-bold amber-text py-2">Web developer</h6>
                                          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
                                          </p>
                                          <button type="button" className="fab fa-facebook-f btn-floating btn-small btn-fb"><i></i></button>
                                          <button type="button" className="fab fa-twitter btn-floating btn-small btn-tw"><i></i></button>
                                          <button type="button" className="fab fa-dribbble btn-floating btn-small btn-dribbble"><i></i></button>
                                      </div>
                              </div>
                        </div>
                    
                      <div className="col-sm-4">       
                            <div className="card card-cascade">
                            <img className="view view-cascade overlay card-img-top mask rgba-white-slight" src="/images/Jennifer.jpg" alt="Card image cap"></img> 
                                <div className="card-body card-body-cascade text-center">
                                    <h4 className="card-title"><strong>Jennifer Huang</strong></h4>
                                    <h6 className="font-weight-bold amber-text py-2">Web developer</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
                                    </p>
                                    <button type="button" className="fab fa-facebook-f btn-floating btn-small btn-fb"><i></i></button>
                                          <button type="button" className="fab fa-twitter btn-floating btn-small btn-tw"><i></i></button>
                                          <button type="button" className="fab fa-dribbble btn-floating btn-small btn-dribbble"><i></i></button>
                                </div>
                            </div>
                      </div>   

                  </div>
            </div>
            </Fragment>
        )
    }
}
   
export default ContactDetails;
