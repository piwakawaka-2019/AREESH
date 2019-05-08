import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";

import { getUsers } from "../apis/users";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    margin: 450,
    backgroundColor: theme.palette.background.paper
  }
});

class AttendeeList extends React.Component {
  state = {
    checked: [1]
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  render() {
    const { classes } = this.props;
    // const users = getUsers().then(users => {
    //   console.log(users);
    // });
    // need to add reducers etc *******************fucking look jesse
    return (
      <List dense className={classes.root}>
        {this.props.users.map(user => (
          <ListItem key={user} button>
            <ListItemAvatar>
              <Avatar alt={`img`} src={``} />
            </ListItemAvatar>
            <ListItemText primary={`${user.userName}`} />
            <ListItemSecondaryAction>
              <Checkbox
                onChange={this.handleToggle(user.id)}
                checked={this.state.checked.indexOf(user.id) !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

AttendeeList.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(withStyles(styles)(AttendeeList));
