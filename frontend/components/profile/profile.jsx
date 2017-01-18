import React from 'react';
import FeaturedBusiness from './featured_business';
import Loading from '../loading';
import { withRouter } from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.redirectToReviews = this.redirectToReviews.bind(this);
    this.redirectToBookmarks = this.redirectToBookmarks.bind(this);
    this.redirectToFeatured = this.redirectToFeatured.bind(this);
  }

  redirectToReviews() {
    this.props.router.push(`/profile/${this.props.currentUser.id}/reviews`);
  }

  redirectToBookmarks() {
    this.props.router.push(`/profile/${this.props.currentUser.id}/bookmarks`);
  }

  redirectToFeatured() {
    this.props.router.push(`/profile/${this.props.currentUser.id}`);
  }

  render() {
    let content;
    if (this.props.children) {
      content = this.props.children;
    } else {
      content = <FeaturedBusiness
        requestFeaturedBusiness={this.props.requestFeaturedBusiness}
        featuredBusiness={this.props.featuredBusiness}
      />;
    }

    let greeting;
    if (this.props.currentUser) {
      greeting = <h1>Welcome, {this.props.currentUser.username}</h1>;
    } else {
      greeting = <h1></h1>;
    }

    return(
      <div id="profile-page">
        <div className="separator"></div>
        {greeting}
        <div id="profile-nav">
          <span onClick={this.redirectToFeatured} className="button fa-stack fa-2x">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"></i>
          </span>
          <span onClick={this.redirectToReviews} className="button fa-stack fa-2x">
            <i className="fa fa-pencil fa-stack-1x" aria-hidden="true"></i>
            <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"></i>
          </span>
          <span onClick={this.redirectToBookmarks} className="button fa-stack fa-2x">
            <i className="fa fa-bookmark fa-stack-1x" aria-hidden="true"></i>
            <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"></i>
          </span>
          <div className="line"></div>
        </div>

        {content}
      </div>
    );
  }
}

export default withRouter(Profile);
