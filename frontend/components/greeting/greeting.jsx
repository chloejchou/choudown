import React from 'react';
import { Link, withRouter } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    this.props.logout().then(() => this.props.router.push('/'));
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h2>Welcome, {this.props.currentUser.username}</h2>
          <button onClick={this.logoutUser}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
  }
}

export default withRouter(Greeting);
