
import React, { Component, Fragment } from 'react';




class ContactDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }
    render() { 
      return ( 
             
            <div className="row">
            
            <div className="col-lg-4 col-md-12">
            
                <div className="card card-cascade wider">

     
                   <div className="view view-cascade overlay">
                         <img src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" className="card-img-top"
                         alt="wider">  
                       
                   </div>
  

   
                    <div className="card-body card-body-cascade text-center">
       
                        <h4 className="card-title"><strong>Alice Mayer</strong></h4>
                        <h5 className="indigo-text"><strong>Photographer</strong></h5>

                        <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
                          laudantium, totam rem aperiam. </p>
                        

                     </div>
      

                </div>
   

        
            
          


            </div>
           
      
       )
    }
  }
   
  export default ContactDetails;