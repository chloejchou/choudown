import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeIndexItem extends React.Component {
  render() {
    return (
      <li id={this.props.tag}>
        <p>{this.props.tag}</p>
        <img src={this.props.src} />
      </li>
    );
  }
}

export default withRouter(HomeIndexItem);
