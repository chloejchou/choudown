import React from 'react';
import ReviewIndexItem from './review_index_item';
import Loading from '../loading';

class ReviewIndex extends React.Component {
  render() {
    if (!this.props.reviews) {
      return <Loading />;
    }

    return (
      <div id="review-index" className="col col-1-2">
        <h1>REVIEWS</h1>
        {this.props.reviews.map(review => (
          <ReviewIndexItem key={review.id} review={review}/>
        ))}
      </div>
    );
  }
}

export default ReviewIndex;
