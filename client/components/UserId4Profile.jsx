import React, { Component ,Fragment as F} from 'react';
import {connect} from 'react-redux'




function UserId4Profile ({user}) {
   
  
        
        return (
            <F>
                
                        <div className="card mt-4 mb-4">

                        <img className="card-img-top" src={user.image_url} alt="Card image cap"></img>

                        <div className="card-body">

                        <h4 className="card-title">{user.user_name}</h4>
                       {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                      
                         </div>
                   
             </div>
            </F>
        );
    }
const mapStateToProps = (state) => {
    
    return {user:state.auth.user}
  }
  


export default connect(mapStateToProps)(UserId4Profile)


