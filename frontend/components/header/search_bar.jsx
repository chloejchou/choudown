import React from 'react';
import { Link, withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {find: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    this.props.requestBusinesses(this.state.find).then(() => this.props.router.push(`/businesses-search?tag=${this.state.find}`));
  }

  handleChange(e) {
    this.setState({ find: e.target.value });
  }

  render() {
    return (
      <li id="search">
        <label>find:</label>
        <input value={this.state.find} placeholder="italian, bakeries, etc." onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
      </li>
    );
  }
}

export default withRouter(SearchBar);
