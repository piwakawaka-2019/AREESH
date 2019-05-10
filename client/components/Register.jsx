import React from "react";
import { connect } from "react-redux";
import { registerUserRequest } from "../actions/register";
import { loginError } from "../actions/login";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      profilePictureUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };
    this.updateDetails = this.updateDetails.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(loginError(""));
  }
  updateDetails(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submit(e) {
    e.preventDefault();
    e.target.reset();
    let {
      userName,
      firstName,
      lastName,
      password,
      confirmPassword,
      profilePictureUrl
    } = this.state;
    if (confirmPassword != password)
      return this.props.dispatch(loginError("Passwords don't match"));
    this.props.dispatch(registerUserRequest(this.state));
  }
  render() {
    const { auth } = this.props;
    return (


      <form className="text-center p-5 w-responsive m-auto" onSubmit={this.submit}>
        <p className="h4 mb-4">Sign up</p>
        {this.props.auth.errorMessage && (
          <div class="red-text">{this.props.auth.errorMessage}</div>
        )}
        <div className="form-row mb-4">
          <div className="col">
            <input
              type="text"
              id="defaultRegisterFormFirstName"
              className="form-control"
              name="firstName"
              placeholder="First name"
              onChange={this.updateDetails}
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="lastName"
              id="defaultRegisterFormLastName"
              className="form-control"
              placeholder="Last name"
              onChange={this.updateDetails}
            />
          </div>
        </div>
        <input
          type="text"
          name="userName"
          id="defaultRegisterFormEmail"
          className="form-control mb-4"
          placeholder="Username"
          onChange={this.updateDetails}
        />
        <div className="form-row mb-4">
          <div className="col">
            <input
              type="password"
              name="password"
              id="defaultRegisterFormPassword"
              className="form-control"
              placeholder="Password"
              aria-describedby="defaultRegisterFormPasswordHelpBlock"
              onChange={this.updateDetails}
            />
          </div>
          <div className="col">
            <input
              type="password"
              name="confirmPassword"
              id="defaultRegisterFormPassword"
              className="form-control"
              placeholder="Confirm Password"
              aria-describedby="defaultRegisterFormPasswordHelpBlock"
              onChange={this.updateDetails}
            />
          </div>
        </div>
        <small
          id="defaultRegisterFormPasswordHelpBlock"
          className="form-text text-muted mb-4"
        >
          At least 8 characters and 1 digit
        </small>

        <input
          type="text"
          id="defaultRegisterPhonePassword"
          className="form-control"
          placeholder="Profile Picture URL"
          name="profilePictureUrl"
          aria-describedby="defaultRegisterFormPhoneHelpBlock"
          onChange={this.updateDetails}
        />
        <small
          id="defaultRegisterFormPhoneHelpBlock"
          className="form-text text-muted mb-4"
        >
          Optional
        </small>

        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="defaultRegisterFormNewsletter"
          />
          <label
            className="custom-control-label"
            htmlFor="defaultRegisterFormNewsletter"
          >
            Subscribe to our newsletter
          </label>
        </div>

        <button className="btn btn-outline-warning btn-rounded waves-effect" type="submit">
          Sign In
        </button>

        <p>or sign up with:</p>

        <a className="grey-text mx-2">
          <i className="fab fa-facebook-f" />
        </a>
        <a className="grey-text mx-2">
          <i className="fab fa-twitter" />
        </a>
        <a className="grey-text mx-2">
          <i className="fab fa-linkedin-in" />
        </a>
        <a className="grey-text mx-2">
          <i className="fab fa-github" />
        </a>

        <hr />

        <p>
          By clicking
          <em> Sign up </em>
          <span> you agree to our </span>
          <a className="amber-text" href="" target="_blank">
            terms of service
          </a>
        </p>
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(Register);
