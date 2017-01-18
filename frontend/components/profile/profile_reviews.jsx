import React from 'react';
import ProfileReviewItem from './profile_review_item';

class ProfileReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPersonalReviews(this.props.currentUser.id);
  }

  render() {
    return(
      <div id="profile-reviews">
        <h1>Your Reviews</h1>
        {this.props.reviews.map((review, idx) => (
          <ProfileReviewItem key={idx} review={review}/>
        ))}
      </div>
    );
  }
}

export default ProfileReviews;
