import React from "react";
import { Link } from "react-router-dom";
import ContactDetails from './ContactDetails'

export default function Footer() {
  return (
    <div>
      <footer className="page-footer font-small grey darken-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5">
              <div className="mb-5 flex-center ">
              <Link className="fb-ic" to="/">
              <i className="fab fa-facebook-f fa-lg amber-text mr-md-5 mr-3 fa-2x ">
                    {" "}
                  </i>
           
             </Link>
                {/* <a className="fb-ic">
                  <i className="fab fa-facebook-f fa-lg amber-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a> */}
                <Link className="tw-ic" to="/">
                <i className="fab fa-twitter fa-lg amber-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
           
             </Link>
                {/* <a className="tw-ic">
                  <i className="fab fa-twitter fa-lg amber-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a> */}
                  <Link className="gplus-ic" to="/">
                  <i className="fab fa-google-plus-g fa-lg amber-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
               
             </Link>

                {/* <a className="gplus-ic">
                  <i className="fab fa-google-plus-g fa-lg amber-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a> */}
                  <Link className="li-icc" to="/">
                  <i className="fab fa-linkedin-in fa-lg amber-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
               
             </Link>


                {/* <a className="li-ic">
                  <i className="fab fa-linkedin-in fa-lg amber-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a> */}
                <Link className="ins-ic" to="/">
                <i className="fab fa-instagram fa-lg amber-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
               
             </Link>

                {/* <a className="ins-ic">
                  <i className="fab fa-instagram fa-lg amber-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a> */}
                <Link className="pin-ic" to="/">
                <i className="fab fa-pinterest fa-lg amber-text fa-2x"> </i>
               
             </Link>

                {/* <a className="pin-ic">
                  <i className="fab fa-pinterest fa-lg amber-text fa-2x"> </i>
                </a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2019 Areesh Team <br></br>
         <Link className="contact_details " to="/ContactDetails">
                
                  Contact Us
                  <span className="sr-only">(current)</span>
                
              </Link>

              
        
        </div> 
       
         
      </footer>
    </div>
  );
}
