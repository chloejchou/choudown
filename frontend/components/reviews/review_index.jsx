import React from 'react';
import ReviewIndexItem from './review_index_item';
import Loading from '../loading';

class ReviewIndex extends React.Component {
  render() {
    return (
      <div id="review-index">
        {this.props.reviews.map(review => (
          <ReviewIndexItem
            key={review.id}
            review={review}
            deleteReview={this.props.deleteReview}
            currentUser={this.props.currentUser}
          />
        ))}
      </div>
    );
  }
}

export default ReviewIndex;
