import React from 'react'
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


import Login from './Login'
import Register from './Register'
import Header from './nav/Header'
import Footer from './Footer';
import Home from './gameComponents/Home';
import  Game from './gameComponents/Game';
import WhichWord from './gameComponents/WhichWord'
import WordDefinition from './gameComponents/WordDefinition'
import LiveSpelling from './gameComponents/LiveSpelling'
import Winner from './gameComponents/Winner'


export function App({auth}) {
  return (
    
    <Router>
      <Header/>
      
      <div className="container has-text-centered">
      
        <main className='body'>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/game" component={Game} exact/>
          <Route exact path="/whichWord" component={WhichWord} />
          <Route exact path="/WordDefinition" component={WordDefinition} />
          <Route exact path="/LiveSpelling" component={LiveSpelling} />
          <Route exact path="/Winner" component={Winner} />
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
