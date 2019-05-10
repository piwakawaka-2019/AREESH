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
                <div className="row">
                       <div className="col-4">
                             <div className="card card-cascade">
                                      <div className="view view-cascade overlay">
                                          {/* {/* {/* <img className="card-img-top mask rgba-white-slight" src="/images/Des.jpg" alt="Card image cap"> /</img> */} */} */}
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
                        </div>
                    
                      <div className="col-4">       
                            <div className="card card-cascade">
                                <div className="view view-cascade overlay">
                                    {/* {/* {/* <img className="card-img-top mask rgba-white-slight" src="/images/Des.jpg" alt="Card image cap"> /</img> */} */} */}
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
                      </div>   

                       <div className="col-4">       
                            <div className="card card-cascade">
                                <div className="view view-cascade overlay">
                                    {/* {/* {/* <img className="card-img-top mask rgba-white-slight" src="/images/Des.jpg" alt="Card image cap"> /</img> */} */} */}
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
                        </div>   
                  </div>
                  <div className="row">
                  <div className="col-sm-4">
                             <div className="card card-cascade">
                                      <div className="view view-cascade overlay">
                                          {/* {/* {/* <img className="card-img-top mask rgba-white-slight" src="/images/Des.jpg" alt="Card image cap"> /</img> */} */} */}
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
                        </div>
                    
                      <div className="col-sm-4">       
                            <div className="card card-cascade">
                                <div className="view view-cascade overlay">
                                    {/* {/* {/* <img className="card-img-top mask rgba-white-slight" src="/images/Des.jpg" alt="Card image cap"> /</img> */} */} */}
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
                      </div>   

                  </div>
            </div>
            </Fragment>
        )
    }
}
   
export default ContactDetails;
