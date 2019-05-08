import React, { Component } from 'react';

import { VictoryLine, VictoryChart} from 'victory';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

class Graph extends React.Component {
    render() {
      return (
        <VictoryChart>
        <VictoryLine
          samples={50}
          style={{data:
            {stroke: "black", strokeWidth: 4}
          }}
          y={(data) => Math.sin(2 * Math.PI * data.x)}
        />
    
        <VictoryLine
          samples={10}
          style={{data:
            {stroke: "green", strokeWidth: 4}
          }}
          y={(data) => Math.cos(2 * Math.PI * data.x)}
        />
      </VictoryChart>

      )
      
    }
  }
  
  // ReactDOM.render(<Graph/>, mountNode);

 export default Graph


