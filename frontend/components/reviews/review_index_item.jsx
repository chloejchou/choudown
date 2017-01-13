import React from 'react';

class ReviewIndexItem extends React.Component {

  stars(rating) {
    const filled_star = <i className="fa fa-star" aria-hidden="true"></i>;
    const empty_star = <i className="fa fa-star-o" aria-hidden="true"></i>;

    switch(rating) {
      case 5:
        return <p>{filled_star}{filled_star}{filled_star}{filled_star}{filled_star}</p>;
      case 4:
        return <p>{filled_star}{filled_star}{filled_star}{filled_star}{empty_star}</p>;
      case 3:
        return <p>{filled_star}{filled_star}{filled_star}{empty_star}{empty_star}</p>;
      case 2:
        return <p>{filled_star}{filled_star}{empty_star}{empty_star}{empty_star}</p>;
      case 1:
        return <p>{filled_star}{empty_star}{empty_star}{empty_star}{empty_star}</p>;
    }
  }

  render() {

    return (
      <div className="review-index-item group">
        <div className="review-item-header">
          <p>by: {this.props.review.user.username}</p>
          <p>{this.stars(this.props.review.rating)}</p>
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
