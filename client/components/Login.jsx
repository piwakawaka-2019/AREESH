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
      <div class="card  m-4  p-3 text-center">
       <h5 class="card-header stylish-color white-text">
    <strong>Sign in</strong>
  </h5>
      <form
        onSubmit={this.submit}
        className="text-center  m-auto p-3"
      >
       
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
          className="form-control mb-4 "
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
            <a className="amber-text" href="">Forgot password?</a>
          </div>
        </div>

        <button className="btn btn-outline-warning btn-rounded waves-effect my-4" type="submit">
          Sign in
        </button>

        <p>
          Not a member?
          <a className="amber-text" href="#"> Register</a>
        </p>

        <p>or sign in with:</p>

        <a className="amber-text mx-2">
          <i className="fab fa-facebook-f" />
        </a>
        <a className="amber-text mx-2">
          <i className="fab fa-twitter" />
        </a>
        <a className="amber-text mx-2">
          <i className="fab fa-linkedin-in" />
        </a>
        <a className="amber-text mx-2">
          <i className="fab fa-github" />
        </a>
      </form>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(Login);
