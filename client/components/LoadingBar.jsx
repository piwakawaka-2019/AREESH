import React, { Component, Fragment } from 'react'

class LoadingBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() { 
    return ( 
      <Fragment>
        <div className="apple">
            <div className='load-bar'>
                <div className='h-load-bar'>
                <div className='load-step'></div>
                </div>
                {/* <span>Loading...</span> */}
            </div>
        </div>

      </Fragment>
    )
  }
}
 
export default LoadingBar