import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeIndexItem extends React.Component {
  render() {
    return (
      <li id={this.props.tag} style={ {"background-image": `url(${this.props.src})`} }>{this.props.tag}</li>
    );
  }
}

export default withRouter(HomeIndexItem);
