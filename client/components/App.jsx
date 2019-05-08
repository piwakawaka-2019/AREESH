import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'



import Footer from './Footer';
import About from './About';
import Header from './Header';


export function App({auth}) {
  return (
    <div>
      <Header />,
      <About />,
      <Footer />
    </div>
    
   
  )
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
