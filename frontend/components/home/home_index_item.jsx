import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.router.push(`/businesses-search?tag=${this.props.tag}`);
  }

  render() {
    return (
      <li onClick={this.handleClick} id={this.props.tag}>
        <p>{this.props.tag}</p>
        <img src={this.props.src} />
      </li>
    );
  }
}

export default withRouter(HomeIndexItem);
