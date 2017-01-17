import React from 'react';
import Loading from '../loading';
import MapItem from '../map';
import ReviewForm from '../reviews/review_form';
import ReviewIndex from '../reviews/review_index';
import { stars } from '../stars';

class BusinessDetail extends React.Component {
  constructor(props) {
    super(props);

    this.averageRating = this.averageRating.bind(this);
  }

  componentDidMount() {
    this.props.requestBusiness(this.props.params.businessId);
    this.props.requestReviews(this.props.params.businessId);
  }

  averageRating() {
    let average = 0;
    this.props.business.ratings.forEach(rating => {
      average += rating;
    });

    return stars(Math.round(average / this.props.business.ratings.length));
  }

  render() {
    if (!this.props.business) {
      return <Loading />;
    }

    return (
      <div id="business-detail">
        <div id="business-detail-map">
          <MapItem
            zoom={15}
            center={{lat: this.props.business.lat, lng: this.props.business.long}}
            businessPositions={[{
              lat: this.props.business.lat,
              long: this.props.business.long,
              name: this.props.business.name,
              address: this.props.business.street_address
            }]}
            />
        </div>
        <div id="business-detail-info">
          <div id="bookmark-icon">
            <i className="fa fa-bookmark" aria-hidden="true"></i>
            <span className="hidden">{"<< bookmark this business"}</span>
          </div>
          <h1>{this.props.business.name}</h1>
          {this.averageRating()}
          <p>{this.props.business.ratings.length} Reviews || {this.props.business.price}</p>
          <p>{this.props.business.street_address}, {this.props.business.city}, {this.props.business.state}, {this.props.business.zip}</p>
          <p>{this.props.business.tags.join(", ")}</p>
        </div>
        <div className="line"></div>
        <div id="business-detail-reviews">
          <ReviewForm
            businessId={this.props.params.businessId}
            createReview={this.props.createReview}
            clearReviewErrors={this.props.clearReviewErrors}
            errors={this.props.errors}
          />
          <ReviewIndex reviews={this.props.reviews}/>
        </div>
      </div>
    );
  }
}

export default BusinessDetail;
