import React from 'react';
import FeaturedBusiness from './featured_business';

class Profile extends React.Component {
  constructor(props) {
    super(props);
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

    return(
      <div id="profile-page">
        <div className="separator"></div>
        <h1>Welcome, {this.props.currentUser.username}</h1>
        <div id="profile-nav">
          <span className="fa-stack fa-2x">
            <i className="fa fa-pencil fa-stack-1x" aria-hidden="true"></i>
            <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"></i>
          </span>
          <span className="fa-stack fa-2x">
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

export default Profile;
