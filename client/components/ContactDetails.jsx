import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom"

class ContactDetails extends Component {
    constructor(props) {
      super(props)
      this.state = { }
    }
    render() { 
        return ( 
            <Fragment>
            <div className = "container">
                <div className="row m-4 ">
                       <div className="col-sm-4">
                             <div className="card card-cascade">
                                      
                                      <img className="view view-cascade overlay card-img-top mask rgba-white-slight" src="/images/Des.JPG" alt="Card image cap"></img> 
                                      <div className="card-body card-body-cascade text-center">
                                          <h4 className="card-title"><strong>Des Whelan</strong></h4>
                                          <h6 className="font-weight-bold amber-text py-2">Product Owner</h6>
                                          <p className="card-text">
                                          <ul>
                                        <li>
                                        <strong>Favourite colour:</strong> Green
                                        </li>
                                        <li>
                                        <strong>Favourite food:</strong> Whurly Burger
                                        </li>
                                        <li>
                                        <strong>Favourite animal:</strong> Honey Badger
                                        </li>
                                        <li>
                                        <strong>Strenth:</strong> Talk and Shite
                                        </li>
                                    </ul>
                                          </p>
                                          <button type="button" className="fab fa-facebook-f btn-floating btn-small btn-fb "><i></i></button>
                                          <button type="button" className="fab fa-twitter btn-floating btn-small btn-tw"><i></i></button>
                                          <button type="button" className="fab fa-dribbble btn-floating btn-small btn-dribbble"><i></i></button>
                                      </div>
                              </div>
                        </div>
                    
                      <div className="col-sm-4">       
                            <div className="card card-cascade">
                            <img className="view view-cascade overlay card-img-top mask rgba-white-slight" src="/images/Vinnie.jpg" alt="Card image cap"></img> 
                                <div className="card-body card-body-cascade text-center">
                                    <h4 className="card-title"><strong>Vinnie Reid</strong></h4>
                                    <h6 className="font-weight-bold amber-text py-2">Technical Lead</h6>
                                    <p className="card-text">
                                    <ul>
                                        <li>
                                        <strong>Favourite colour:</strong> Blue
                                        </li>
                                        <li>
                                        <strong>Favourite food:</strong> Frie chicken
                                        </li>
                                        <li>
                                        <strong>Favourite animal:</strong> Dog
                                        </li>
                                        <li>
                                        <strong>Strenth:</strong> I can think outsize of box
                                        </li>
                                    </ul>
                                    
                                    </p>
                                    <button type="button" className="fab fa-facebook-f btn-floating btn-small btn-fb"><i></i></button>
                                          <button type="button" className="fab fa-twitter btn-floating btn-small btn-tw"><i></i></button>
                                          <button type="button" className="fab fa-dribbble btn-floating btn-small btn-dribbble"><i></i></button>
                                </div>
                            </div>
                      </div>   

                       <div className="col-sm-4">       
                            <div className="card card-cascade">
                            <img className="view view-cascade overlay card-img-top mask rgba-white-slight" src="/images/Josh.jpg" alt="Card image cap"></img> 
                                <div className="card-body card-body-cascade text-center">
                                    <h4 className="card-title"><strong>Vibe Watcher</strong></h4>
                                    <h6 className="font-weight-bold amber-text py-2">Web developer</h6>
                                    <p className="card-text">
                                    <ul>
                                        <li>
                                        <strong>Favourite colour:</strong> Blue
                                        </li>
                                        <li>
                                        <strong>Favourite food:</strong> Soft tacos
                                        </li>
                                        <li>
                                        <strong>Favourite animal:</strong> English Bulldog
                                        </li>
                                        <li>
                                        <strong>Strenth:</strong> 'm party animal
                                        </li>
                                    </ul>
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
                                          <h6 className="font-weight-bold amber-text py-2">Git Master</h6>
                                          <p className="card-text">
                                          <ul>
                                        <li>
                                        <strong>Favourite colour:</strong> Orange
                                        </li>
                                        <li>
                                        <strong>Favourite food:</strong> Blueberry
                                        </li>
                                        <li>
                                        <strong>Favourite animal:</strong> Cheetah
                                        </li>
                                        <li>
                                        <strong>Strenth:</strong> I can reach top shelf
                                        </li>
                                    </ul>
                                          </p>
                                          <button type="button" className="fab fa-facebook-f btn-floating btn-small btn-fb"><i></i></button>
                                          <button type="button" className="fab fa-twitter btn-floating btn-small btn-tw"><i></i></button>
                                          <button type="button" className="fab fa-dribbble btn-floating btn-small btn-dribbble"><i></i></button>
                                      </div>
                              </div>
                        </div>
                    
                      <div className="col-sm-4">       
                            <div className="card card-cascade">
                            <img className="view view-cascade overlay card-img-top mask rgba-white-slight" src="/images/Jennifer.JPG" alt="Card image cap"></img> 
                                <div className="card-body card-body-cascade text-center">
                                    <h4 className="card-title"><strong>Jennifer Huang</strong></h4>
                                    <h6 className="font-weight-bold amber-text py-2">Web Developer</h6>
                                    <p className="card-text">
                                    <ul>
                                        <li>
                                           <strong>Favourite colour:</strong> Bistre
                                        </li>
                                        <li>
                                        <strong>Favourite food:</strong> Watermelon
                                        </li>
                                        <li>
                                        <strong>Favourite animal:</strong> Pug
                                        </li>
                                        <li>
                                        <strong>Strenth:</strong> I can fall into sleep in 5 minutes
                                        </li>
                                    </ul>
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
   
export default ContactDetails
