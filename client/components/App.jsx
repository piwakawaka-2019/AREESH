import React from 'react'
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './nav/Header'
import Login from './Login'
import Register from './Register'
import Game from './gameComponents/Game'
import ContactDetails from './ContactDetails'
import Footer from './Footer'

export function App({auth}) {
  return (
    <Router>
      <Header/>
      <div className="container has-text-centered">
        <main className='body'>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/game" component={Game} exact/>
          <Route exact path="/ContactDetails" component={ContactDetails} />
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
