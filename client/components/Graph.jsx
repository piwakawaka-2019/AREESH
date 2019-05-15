import React, { Fragment as F } from 'react';
import { VictoryAxis, VictoryLine, VictoryChart } from 'victory';
import {connect} from 'react-redux'



class Graph extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      lastSevenDays: []
    }
  }

  getTheLastSevenDays (date) {
    let lastSevenDays = []

    for (var i = 0; i < 7; i++){
        lastSevenDays.push(new Date(now.getFullYear(), now.getMonth(), now.getDate()-i))
    }

    this.setState({
      lastSevenDays: lastSevenDays
    })
  }

 render() {

  console.log(this.state.lastSevenDays)
  console.log(this.props.gameHistory)

   return (
       <F>
        <VictoryChart
         domainPadding={{x: 40}}
         style={{marginLeft: 120}}
        >
         <VictoryLine
           data={[
               {days: "Mon", wordslearnt: 10},
               {days: "Tue", wordslearnt: 28},
               {days: "Wed", wordslearnt: 30},
               {days: "Thu", wordslearnt: 25},
               {days: "Fri", wordslearnt: 35},
               {days: "Sat", wordslearnt: 43},
               {days: "Sun", wordslearnt: 32},
                ]}
           x="days"
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


   const mapStateToProps = state => ({
       gameHistory: state.userGameHistory
     });

     const mapDispatchToProps = dispatch => {
       return 1
     };

     export default connect(
       mapStateToProps,
       mapDispatchToProps
     )(Graph);
