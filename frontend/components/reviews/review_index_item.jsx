import React from 'react';
import { stars } from '../stars';
import Loading from '../loading';
import PhotoIndexItem from './photo_index_item';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.deleteReview(this.props.review.id);
  }

  render() {
    if (!this.props.currentUser) {
      return <Loading />;
    }

    let deleteIcon;
    if (this.props.currentUser.id === this.props.review.user.id) {
      deleteIcon = <p
        onClick={this.handleRemove}>
          <i className="fa fa-times" aria-hidden="true"></i>
      </p>;
    } else {
      deleteIcon= <p style={{height: "1px"}}></p>;
    }

    return (
      <div className="review-index-item group">
        <div className="review-item-header">
          <div>
            <p>by: {this.props.review.user.username}</p>
            {stars(this.props.review.rating)}
          </div>
          {deleteIcon}
        </div>
        <p className="review-item-text">{this.props.review.review_text}</p>
        <div>
          {this.props.review.photos.map(photo => (
            <PhotoIndexItem photo={photo} key={photo.id}/>
          ))}
        </div>
        <br /><br />
      </div>
    );
  }
}

export default ReviewIndexItem;
