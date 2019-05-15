import React, { Fragment as F } from 'react';
import { VictoryAxis, VictoryLine, VictoryChart } from 'victory';

class Graph extends React.Component {
  render() {
    return (
        <F>
         <VictoryChart
          domainPadding={{x: 40}}
          style={{marginLeft: 120}}
         >
          <VictoryLine
            data={[
                {weeks: 1, wordslearnt: 10},
                {weeks: 2, wordslearnt: 28},
                {weeks: 3, wordslearnt: 30},
                {weeks: 4, wordslearnt: 25},
                {weeks: 5, wordslearnt: 35},
                {weeks: 6, wordslearnt: 43},
                {weeks: 7, wordslearnt: 32},
                {weeks: 8, wordslearnt: 59},
                 ]}
            x="weeks"
            y="wordslearnt"
            style={{
              data: {stroke: "#FFB12E", strokeWidth: 3},
              labels: {fontSize: 14}
            }}
           />
          <VictoryAxis
            label="Weeks"
            style={{
              axisLabel: { padding: 30 }
            }}
          />
          <VictoryAxis dependentAxis
            label="Words Learnt"
            style={{
              axisLabel: { padding: 40 }
            }}
          />
      </VictoryChart>
    </F>
   
        );
      }
    }
            


export default Graph;

