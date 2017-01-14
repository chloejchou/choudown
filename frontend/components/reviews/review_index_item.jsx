import React from 'react';

class ReviewIndexItem extends React.Component {

  stars(rating) {
    const filledStar = <i className="fa fa-star" aria-hidden="true"></i>;
    const emptyStar = <i className="fa fa-star-o" aria-hidden="true"></i>;

    switch(rating) {
      case 5:
        return <p>{filledStar}{filledStar}{filledStar}{filledStar}{filledStar}</p>;
      case 4:
        return <p>{filledStar}{filledStar}{filledStar}{filledStar}{emptyStar}</p>;
      case 3:
        return <p>{filledStar}{filledStar}{filledStar}{emptyStar}{emptyStar}</p>;
      case 2:
        return <p>{filledStar}{filledStar}{emptyStar}{emptyStar}{emptyStar}</p>;
      case 1:
        return <p>{filledStar}{emptyStar}{emptyStar}{emptyStar}{emptyStar}</p>;
    }
  }

  render() {

    return (
      <div className="review-index-item group">
        <div className="review-item-header">
          <p>by: {this.props.review.user.username}</p>
          {this.stars(this.props.review.rating)}
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
