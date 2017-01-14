import React from 'react';
import Loading from '../loading';
import MapItem from '../map';
import ReviewForm from '../reviews/review_form';
import ReviewIndex from '../reviews/review_index';

class BusinessDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestBusiness(this.props.params.businessId);
    this.props.requestReviews(this.props.params.businessId);
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
          <h1>{this.props.business.name}</h1>
          <p>{this.props.business.street_address}</p>
          <p>{this.props.business.city}, {this.props.business.state}, {this.props.business.zip}</p>
          <p>{this.props.business.price}</p>
          <p>{this.props.business.tags.join(", ")}</p>
        </div>
        <div className="line"></div>
        <div id="business-detail-reviews">
          <ReviewForm businessId={this.props.params.businessId} createReview={this.props.createReview}/>
          <ReviewIndex reviews={this.props.reviews}/>
        </div>
      </div>
    );
  }
}

export default BusinessDetail;
