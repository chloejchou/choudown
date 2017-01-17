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
    return (
      <div>
        <ul id="nav-header">
          <li id="title">
            <button onClick={this.goHome}>CHOU DOWN</button>
          </li>
          <SearchBar requestBusinesses={this.props.requestBusinesses}/>
          <li id="logout">
            <h2><i className="fa fa-user" aria-hidden="true"></i> profile</h2>
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
