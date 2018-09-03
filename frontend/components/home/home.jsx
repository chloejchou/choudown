import React from 'react';
import { withRouter } from 'react-router';

import HeaderContainer from '../header/header_container';
import HomeIndex from './home_index';
import TagContainer from '../header/tag_container';

class Home extends React.Component {
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

    $('#home-search-bar').blur(() => {
      setTimeout(() => {
        $('#home-search-drop-down').attr('class', 'hidden');
      }, 10);
    });

    $('#home-search-bar').focus(() => {
      $('#home-search-drop-down').attr('class', '');
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestBusinesses(this.state.find, 1).then(() => {
      $('#home-search-drop-down').attr('class', 'hidden');
      this.props.router.push(`/businesses-search?page=1&tag=${this.state.find}`);
    });
  }

  handleChange(e) {
    this.setState({ find: e.target.value });
    this.props.requestTags(e.target.value);
    $('#home-search-drop-down').attr('class', '');
  }

  handleTagClick(e) {
    e.preventDefault();
    const searchText = e.target.textContent;

    this.setState({ find: searchText });
    $('#home-search-drop-down').attr('class', 'hidden');
    setTimeout(() => {
      this.props.requestBusinesses(searchText, 1).then(() => {
        this.props.router.push(`/businesses-search?page=1&tag=${this.state.find}`);
      });
    }, 300);
  }

  render() {
    return (
      <div id="home-page">
        <section id="home-cover-img">
          <section className="layer">
            <form id="home-search-form" onSubmit={this.handleSubmit}>
              <div id="home-search-bar-header">I'M CRAVING SOME . . .</div>
              <div className="home-search-bar-container">
                <input
                  autoComplete="off"
                  id="home-search-bar"
                  placeholder="italian, mexican, chinese, etc."
                  onChange={this.handleChange}
                  value={this.state.find}
                />
                <button>
                  <i id="home-search-icon" className="fa fa-search" aria-hidden="true" />
                </button>
                <TagContainer handleTagClick={this.handleTagClick} id="home-search-drop-down" />
              </div>
            </form>
            <div id="home-slogan">
              <p>"one cannot think well, love well, sleep well, if one has not dined well" - virginia woolf</p>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default withRouter(Home);
