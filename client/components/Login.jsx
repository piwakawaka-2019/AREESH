import React from "react";
import { connect } from "react-redux";
import { loginUser, loginError } from "../actions/login";

import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }
  componentDidMount() {
    this.props.dispatch(loginError(""));
  }
  updateDetails = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submit = e => {
    e.preventDefault();
    let { userName, password } = this.state;
    this.props.dispatch(loginUser({ userName, password }));
  };

  render() {
    const { auth } = this.props;
    return (
      <form
        onSubmit={this.submit}
        className="text-center w-responsive m-auto p-5"
      >
        <p className="h4 mb-4">Sign in</p>
        {auth.errorMessage && <div class="red-text">{auth.errorMessage}</div>}
        <input
          type="text"
          id="defaultLoginFormUsername"
          className="form-control mb-4"
          placeholder="Username"
          name="userName"
          onChange={this.updateDetails}
        />
        
        <input
          type="password"
          id="defaultLoginFormPassword"
          className="form-control mb-4"
          placeholder="Password"
          name="password"
          onChange={this.updateDetails}
        />

        <div className="d-flex justify-content-around">
          <div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="defaultLoginFormRemember"
              />
              <label
                className="custom-control-label"
                htmlFor="defaultLoginFormRemember"
              >
                Remember me
              </label>
            </div>
          </div>
          <div>
            <a href="">Forgot password?</a>
          </div>
        </div>

        <button className="btn btn-info btn-block my-4" type="submit">
          Sign in
        </button>

        <p>
          Not a member?
          <a href="#"> Register</a>
        </p>

        <p>or sign in with:</p>

        <a className="light-blue-text mx-2">
          <i className="fab fa-facebook-f" />
        </a>
        <a className="light-blue-text mx-2">
          <i className="fab fa-twitter" />
        </a>
        <a className="light-blue-text mx-2">
          <i className="fab fa-linkedin-in" />
        </a>
        <a className="light-blue-text mx-2">
          <i className="fab fa-github" />
        </a>
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(Login);
