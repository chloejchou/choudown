import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", formType: "signup" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.redirect = this.redirect.bind(this);
    this.reverseFormType = this.reverseFormType.bind(this);
  }

  redirect() {
    if (this.props.loggedIn) {
      this.props.router.push('/home');
    }
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {username: this.state.username, password: this.state.password};
    if (this.state.formType === "signup") {
      this.props.signup(user).then(() => this.redirect());
    } else {
      this.props.login(user).then(() => this.redirect());
    }
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <div className="errors">
          <ul>
            {this.props.errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <br />
        </div>
      );
    }
  }

  reverseFormType() {
    if (this.state.formType === "signup") {
      this.setState({ formType: "login"});
    } else {
      this.setState({ formType: "signup"});
    }
  }

  render() {
    let header;
    let nav;
    if (this.state.formType === "login") {
      header = <h1>Log In</h1>;
      nav = <button id="reverse-form" onClick={this.reverseFormType}>{"Don't have an account? Sign Up."}</button>;
    } else {
      header = <h1>Sign Up</h1>;
      nav = <button id="reverse-form" onClick={this.reverseFormType}>{"Already a Member? Log In."}</button>;
    }

    return (
      <div id="session-form">
        {header} <br />
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label for="username">Username</label><br />
          <input id="username" type="text" value={this.state.username} onChange={this.handleChange}></input>
          <br /><br />
          <label for="password">Password</label><br />
          <input id="password" type="password" value={this.state.password} onChange={this.handleChange}></input>
          <br /><br />
          <button><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
        </form>
        <br />
        {nav}
      </div>
    );
  }
}

export default withRouter(SessionForm);
