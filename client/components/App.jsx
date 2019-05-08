import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'



import Footer from './Footer';
import About from './About';
import Header from './Header';


export function App({auth}) {
  return (
    <div>
      <Router>
      <div className="container has-text-centered">

        <div className="hero is-small is-primary">
          <div>
            <Link to='/' className="">

            </Link>
          </div>
        </div>
        <main className=''>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/register" component={Register} exact/>
        </main>
      </div>
      <Footer/>
    </Router>
    </div>
    
   
  )
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
