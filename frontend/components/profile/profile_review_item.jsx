import React from 'react';
import { stars } from '../stars';

class ProfileReviewItem extends React.Component {
  render() {
    return(
      <div className="profile-review-item group">
        <div className="profile-review-desc">
          <h2>{this.props.review.business_name} ·</h2>
          {stars(this.props.review.rating)}
        </div>
        <p>{this.props.review.review_text}</p>
        <div className="profile-review-photos">
          {this.props.review.photos.map(photo => (
            <img key={photo.id} src={photo.url}></img>
          ))}
        </div>
      </div>
    );
  }
}

export default ProfileReviewItem;
