import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Intro  from './intro';
import { WordHint } from './WordHint';

class game extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    const {views} = this.props
    return (
      <div className="text-center">
          {views.displayIntro && <Intro/>}
          {views.displayWordHint && <WordHint/>}
      </div>
    )
  }
}
const mapStateToProps = ({game}) => ({
  views:game.views
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(game)
