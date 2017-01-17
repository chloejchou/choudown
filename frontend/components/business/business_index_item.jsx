import React from 'react';
import { withRouter } from 'react-router';
import { stars } from '../stars';


class BusinessIndexItem extends React.Component {
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
      <div onClick={this.handleClick} className="business-list-item" id={this.props.business.name}>
        <img src={this.props.business.image_url}/>
        <div className="business-list-item-body">
          <p className="business-name">{this.props.business.name}</p>
          {this.averageRating()}
          <p>{this.props.business.ratings.length} Reviews || {this.props.business.price}</p>
          <p className="business-address">{this.props.business.street_address}, {this.props.business.city}, {this.props.business.state} {this.props.business.zip}</p>
          <p className="business-tags">{this.props.business.tags.join(", ")}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(BusinessIndexItem);
