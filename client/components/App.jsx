import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'


import Login from './Login'
import Register from './Register'
import Header from './nav/Header'
import Footer from './Footer';
import Home from './Home';
import  testVinnie from './gameTestVinnie/game';
import WhichWord from './WhichWord'
import WordDefinition from './WordDefinition'
import LiveSpelling from './LiveSpelling'
import Winner from './Winner'
import TileExample from './TileExample'


export function App({auth}) {
  return (
    <div>
      <TileExample/>
      <Router>
      <Header/>
      
      <div className="container has-text-centered">

        <main className='body'>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/gameTestVinnie" component={testVinnie} exact/>
          <Route exact path="/whichWord" component={WhichWord} />
          <Route exact path="/WordDefinition" component={WordDefinition} />
          <Route exact path="/LiveSpelling" component={LiveSpelling} />
          <Route exact path="/Winner" component={Winner} />
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
