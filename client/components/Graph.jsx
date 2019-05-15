import React, { Fragment as F } from 'react';
import { VictoryAxis, VictoryLine, VictoryChart } from 'victory';
import {connect} from 'react-redux'
import {fetchUserGames} from '../actions/game'


class Graph extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      lastSevenDays: [],
      graphData: null
    }
  }

  componentDidMount () {
    this.props.setUserGames()
    .then(() => {
      let graphData = this.createGraphData()
    this.setState({
      graphData
    })
    })
  }

  getTheLastFortnight () {
    let lastSevenDays = []

    let today = new Date()

    for (var i = 0; i < 7; i++){
        lastSevenDays.unshift(new Date(today.getFullYear(), today.getMonth(), today.getDate()-i))
    }

    this.setState({
      lastSevenDays: lastSevenDays
    })

    return lastSevenDays
  }

  createGraphData = () => {
    let graphData = []
    var weekday = new Array(7);
      weekday[0] = "Sun";
      weekday[1] = "Mon";
      weekday[2] = "Tue";
      weekday[3] = "Wed";
      weekday[4] = "Thu";
      weekday[5] = "Fri";
      weekday[6] = "Sat";

    let lastSevenDays = this.getTheLastFortnight()

    lastSevenDays.forEach((date) => {
      let dateWithoutTime = date.setHours(0,0,0,0)

      let wordsSpelledOnThisDay = 0

      this.props.gameHistory.filter(game => {
        if (new Date(game.startTime).setHours(0,0,0,0) == dateWithoutTime) {
          if(game.wordCorrect)
            wordsSpelledOnThisDay++
        }
      })

      graphData.push({days: weekday[date.getDay()], wordslearnt: wordsSpelledOnThisDay})
    })

    return graphData
  }

  handleClick = () => {
    this.setState({
      graphData: this.createGraphData()
    })
  }


 render() {

   return (
       <F>
        <VictoryChart
         domainPadding={{x: 40}}
         style={{marginLeft: 120}}
        >
         <VictoryLine
          data = {this.state.graphData ? this.state.graphData: [
               {days: 'Sun', wordslearnt: 10}]}
           x="days"
           y="wordslearnt"
           style={{
             data: {stroke: "#FFB12E", strokeWidth: 3},
             labels: {fontSize: 14}
           }}
          />
         <VictoryAxis
           label="Days"
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
      return {
        setUserGames: () => dispatch(fetchUserGames()),
      };
    };

     export default connect(
       mapStateToProps,
       mapDispatchToProps
     )(Graph);
