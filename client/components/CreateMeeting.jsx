import React from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import AttendeeList from './AttendeeList'
import Card from '@material-ui/core/Card';


const styles = {
  card: {
    minWidth: 260,
    padding: "40px",
  },
};

class CreateMeeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fulldate: '', meetingName: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    var dateObj = new Date()  ;
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
    var humandate = dateObj.toLocaleDateString("en-NZ", options)
    this.setState({ fulldate: humandate});
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })  
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log("meetingName:", this.state.meetingName)
    
    // this.props.dispatch(createMeeting(this.state.meetingName))
  }
  
  render() { 
    return (
      <div className="container">
        <h2 className="title is-2">Create a New Meeting</h2>
    
        <Card style={{ padding: "40px" }} className={this.props.card}>
        <h2 style={{ fontSize: "16px" }}>Today is: <b>{this.state.fulldate}</b></h2>

        <form className={this.props.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
      
        <TextField
          id="outlined-full-width" 
          label="Your meeting name"
          style={{ margin: 25, width: 600}}
          placeholder="eg: Retrospective"
          margin="normal"
          variant="outlined"

          InputLabelProps={{shrink: true,}}
          name="meetingName"
          value={this.state.meetingName} onChange={this.handleChange}/>

        <br></br>
        <Button type="submit" variant="contained" size="large" color="primary" > Start Meeting </Button>
        </form>
        </Card>

      </div>
    );
  }
}

const mapStateToProps = () => {
  return {
    
  }
}
 
export default connect(mapStateToProps)(CreateMeeting);

