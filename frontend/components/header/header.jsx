import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchBar from './search_bar';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
    this.goHome = this.goHome.bind(this);
    this.redirectToProfile = this.redirectToProfile.bind(this);
  }

  logoutUser() {
    this.props.logout().then(() => this.props.router.push('/'));
  }

  goHome() {
    this.props.router.push('/home');
  }

  redirectToProfile() {
    this.props.router.push(`/profile/${this.props.currentUser.id}`);
  }

  render() {
    return (
      <div id="full-page">
        <ul id="nav-header">
          <li id="title">
            <button onClick={this.goHome}>CHOU DOWN</button>
            <a href="https://github.com/chloejchou/choudown">
              <i className="fa fa-github fa-2x" aria-hidden="true" />
            </a>
          </li>
          <SearchBar requestBusinesses={this.props.requestBusinesses} requestTags={this.props.requestTags} />
          <li id="logout">
            <button onClick={this.redirectToProfile}>
              <i className="fa fa-user" aria-hidden="true" /> PROFILE
            </button>
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
