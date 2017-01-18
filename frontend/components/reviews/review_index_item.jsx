import React from 'react';
import { stars } from '../stars';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.deleteReview(this.props.review.id);
  }

  render() {
    let deleteIcon;
    if (this.props.currentUser.id === this.props.review.user.id) {
      deleteIcon = <p onClick={this.handleRemove}><i className="fa fa-times" aria-hidden="true"></i></p>;
    } else {
      deleteIcon= <p style={{height: "1px"}}></p>;
    }

    return (
      <div className="review-index-item group">
        <div className="review-item-header">
          <p>
            by: {this.props.review.user.username}
            {stars(this.props.review.rating)}
          </p>
          {deleteIcon}
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
