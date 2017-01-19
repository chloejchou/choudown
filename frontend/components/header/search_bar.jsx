import React from 'react';
import { Link, withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { find: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.query.tag !== this.state.find) {
      this.setState({ find: nextProps.location.query.tag });
    }
  }

  componentDidMount() {
    if (this.props.location.query.tag) {
      this.setState({ find: this.props.location.query.tag });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestBusinesses(this.state.find, 1)
      .then(() => this.props.router.push(`/businesses-search?page=1&tag=${this.state.find}`));
  }

  handleChange(e) {
    this.setState({ find: e.target.value });
  }

  render() {
    return (
      <li id="search">
        <form onSubmit={this.handleSubmit}>
          <label>explore sf cuisine:</label>
          <input value={this.state.find} placeholder="italian, bakeries, etc." onChange={this.handleChange}></input>
          <button><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
        </form>
      </li>
    );
  }
}

export default withRouter(SearchBar);
