import React from 'react';
import ProfileReviewItem from './profile_review_item';
import Loading from '../loading';

class ProfileReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.requestPersonalReviews(this.props.currentUser.id)
      .then(() => this.setState({ loading: false }));
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

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
