import React from 'react';
import { stars } from '../stars';

class ReviewIndexItem extends React.Component {
  render() {
    return (
      <div className="review-index-item group">
        <div className="review-item-header">
          <p>by: {this.props.review.user.username}</p>
          {stars(this.props.review.rating)}
        </div>
        <p className="review-item-text">{this.props.review.review_text}</p>
        <div>
          {this.props.review.photos.map(photo => (
            <img className="review-item-img" key={photo.id} src={photo.url}/>
          ))}
        </div>
        <br /><br />
      </div>
    );
  }
}

export default ReviewIndexItem;
