import React from 'react';
import { withRouter } from 'react-router';
import { stars } from '../stars';

class ProfileBookmarkItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.averageRating = this.averageRating.bind(this);
  }

  handleClick() {
    this.props.router.push(`/businesses/${this.props.business.id}`);
  }

  averageRating() {
    let average = 0;
    this.props.business.ratings.forEach(rating => {
      average += rating;
    });

    return stars(Math.round(average / this.props.business.ratings.length));
  }

  render() {
    return(
      <li onClick={this.handleClick} className="bookmark-item">
        <div className="bookmark-detail">
          <h2>{this.props.business.name}</h2>
          {this.averageRating()}
          <p>{this.props.business.ratings.length} Reviews · {this.props.business.price}</p>
        </div>
        <img src={this.props.business.image_url}></img>
      </li>
    );
  }
}

export default withRouter(ProfileBookmarkItem);
