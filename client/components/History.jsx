import React from 'react'
import {connect} from 'react-redux'
import * as V from 'victory'; //graph victory 
import HistoryTable from './HistoryTable'
import Graph from './Graph'
function History (props) {
  return <div className="container">
    <h2 className="title is-2">My Meetings history</h2>
    <div id = "graph">
    <Graph />
          
<div id="HistoryTable">
      <HistoryTable/>
      </div>


    </div>
  </div>
}

export default connect()(History)
