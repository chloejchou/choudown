import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchBar from './search_bar';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  logoutUser() {
    this.props.logout().then(() => this.props.router.push('/'));
  }

  goHome() {
    this.props.router.push('/home');
  }

  render() {
    let welcome;
    if (this.props.currentUser) {
      if (this.props.currentUser.username === "guest") {
        welcome = <h2>Be Our Guest</h2>;
      } else {
        welcome = <h2>Welcome, {this.props.currentUser.username}</h2>;
      }
    }

    return (
      <div>
        <ul id="nav-header">
          <li id="title">
            <button onClick={this.goHome}>CHOU DOWN</button>
          </li>
          <SearchBar requestBusinesses={this.props.requestBusinesses}/>
          <li id="logout">
            {welcome}
            <h2> · </h2>
            <button onClick={this.logoutUser}>LOG OUT</button>
          </li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Header);
