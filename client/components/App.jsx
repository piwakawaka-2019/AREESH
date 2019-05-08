import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'


import Login from './Login'
import Register from './Register'
import Header from './nav/Header'
import Footer from './Footer';
import Home from './Home';


export function App({auth}) {
  return (
    
    <Router>
      <Header/>
      
      <div className="container has-text-centered">

        <div className="hero is-small is-primary">
          <div>
            <Link to='/' className="">
              
            </Link>
            {/* <Nav /> */}
          </div>
        </div>
        <main className=''>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </main>
      </div>
      <Footer/>
    </Router>
  )
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
