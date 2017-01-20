import React from 'react';
import Loading from '../loading';
import MapItem from '../map';
import ReviewForm from '../reviews/review_form';
import ReviewIndexContainer from '../reviews/review_index_container';
import { stars } from '../stars';

class BusinessDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookmarked: false };

    this.averageRating = this.averageRating.bind(this);
    this.bookmarkBusiness = this.bookmarkBusiness.bind(this);
    this.unbookmarkBusiness = this.unbookmarkBusiness.bind(this);
  }

  componentDidMount() {
    this.props.requestBusiness(this.props.params.businessId).then(data => {
      this.setState({ bookmarked: data.business.bookmarked });
    });
    this.props.requestReviews(this.props.params.businessId);
  }


  bookmarkBusiness() {
    this.props.createBookmark(this.props.params.businessId).then(() => {
      this.setState({ bookmarked: true });
    });
  }

  unbookmarkBusiness() {
    this.props.deleteBookmark(this.props.params.businessId).then(() => {
      this.setState({ bookmarked: false });
    });
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

    let bookmarkIcon;
    if (this.state.bookmarked) {
      bookmarkIcon = (
        <div onClick={this.unbookmarkBusiness} id="bookmark-icon">
          <i style={{ color: "#00cccc"}} className="fa fa-bookmark" aria-hidden="true"></i>
          <span>unbookmark this business</span>
        </div>
      );
    } else {
      bookmarkIcon = (
        <div onClick={this.bookmarkBusiness} id="bookmark-icon">
          <i className="fa fa-bookmark" aria-hidden="true"></i>
          <span>bookmark this business</span>
        </div>
      );
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
          {bookmarkIcon}
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
          <ReviewIndexContainer
            reviews={this.props.reviews}
          />
        </div>
      </div>
    );
  }
}

export default BusinessDetail;
