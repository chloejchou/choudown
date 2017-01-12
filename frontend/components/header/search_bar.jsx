import React from 'react';
import { Link, withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { find: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestBusinesses(this.state.find)
      .then(() => (this.props.router.push(`/businesses-search?tag=${this.state.find}`)));
  }

  handleChange(e) {
    this.setState({ find: e.target.value });
  }

  render() {
    return (
      <li id="search">
        <form onSubmit={this.handleSubmit}>
          <label>find:</label>
          <input value={this.state.find} placeholder="italian, bakeries, etc." onChange={this.handleChange}></input>
          <button><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
        </form>
      </li>
    );
  }
}

export default withRouter(SearchBar);
