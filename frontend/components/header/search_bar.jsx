import React from 'react';
import { Link, withRouter } from 'react-router';
import TagContainer from './tag_container';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { find: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }

  componentDidMount() {
    if (this.props.location.query.tag) {
      this.setState({ find: this.props.location.query.tag });
    }

    $('#search-bar-field').blur(() => {
      setTimeout(() => {
        $('#search-drop-down').attr('class', 'hidden');
      }, 10);
    });

    $('#search-bar-field').focus(() => {
      $('#search-drop-down').attr('class', '');
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestBusinesses(this.state.find, 1).then(() => {
      $('#search-drop-down').attr('class', 'hidden');
      this.props.router.push(`/businesses-search?page=1&tag=${this.state.find}`);
    });
  }

  handleChange(e) {
    this.setState({ find: e.target.value });
    this.props.requestTags(e.target.value);
    $('#search-drop-down').attr('class', '');
  }

  handleTagClick(e) {
    e.preventDefault();
    const searchText = e.target.textContent;

    this.setState({ find: searchText });
    $('#search-drop-down').attr('class', 'hidden');
    setTimeout(() => {
      this.props.requestBusinesses(searchText, 1).then(() => {
        this.props.router.push(`/businesses-search?page=1&tag=${this.state.find}`);
      });
    }, 300);
  }

  render() {
    return (
      <li id="search">
        <form onSubmit={this.handleSubmit}>
          <label>explore sf cuisine:</label>
          <input
            autoComplete="off"
            id="search-bar-field"
            value={this.state.find}
            placeholder="italian, bakeries, etc."
            onChange={this.handleChange}
          />
          <button>
            <i className="fa fa-search" aria-hidden="true" />
          </button>
        </form>
        <TagContainer handleTagClick={this.handleTagClick} id="search-drop-down" />
      </li>
    );
  }
}

export default withRouter(SearchBar);
