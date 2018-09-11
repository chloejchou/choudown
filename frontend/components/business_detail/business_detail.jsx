import React from 'react';
import Modal from 'react-modal';

import Loading from '../loading';
import MapItem from '../map';
import ReviewForm from '../reviews/review_form';
import ReviewIndexContainer from '../reviews/review_index_container';
import { stars } from '../stars';

class BusinessDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookmarked: false, isReviewing: false };

    this.bookmarkBusiness = this.bookmarkBusiness.bind(this);
    this.renderAddButtons = this.renderAddButtons.bind(this);
    this.renderAverageRating = this.renderAverageRating.bind(this);
    this.renderMap = this.renderMap.bind(this);
    this.renderReviewForm = this.renderReviewForm.bind(this);
    this.unbookmarkBusiness = this.unbookmarkBusiness.bind(this);
    this.startReviewing = this.startReviewing.bind(this);
    this.finishReviewing = this.finishReviewing.bind(this);
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

  startReviewing() {
    if (!this.state.isReviewing) {
      this.setState({ isReviewing: true });
      const reviews = document.getElementById('business-detail-reviews');
      reviews &&
        window.scrollTo({
          behavior: 'smooth',
          left: 0,
          top: reviews.offsetTop - 80,
        });
    }
  }

  finishReviewing() {
    this.setState({ isReviewing: false });
  }

  renderReviewForm() {
    if (!this.state.isReviewing) {
      return null;
    }

    return (
      <ReviewForm
        businessId={this.props.params.businessId}
        closeReviewForm={this.finishReviewing}
        createReview={this.props.createReview}
        clearReviewErrors={this.props.clearReviewErrors}
        errors={this.props.errors}
      />
    );
  }

  renderAverageRating() {
    let average = 0;
    this.props.business.ratings.forEach(rating => {
      average += rating;
    });

    return stars(Math.round(average / this.props.business.ratings.length));
  }

  renderMap() {
    return (
      <div id="business-detail-map">
        <MapItem
          zoom={15}
          center={{ lat: this.props.business.lat, lng: this.props.business.long }}
          businessPositions={[
            {
              lat: this.props.business.lat,
              long: this.props.business.long,
              name: this.props.business.name,
              address: this.props.business.street_address,
            },
          ]}
        />
      </div>
    );
  }

  renderAddButtons() {
    const bookmarkText = this.state.bookmarked ? 'Unbookmark this business' : 'Bookmark this business';
    const bookmarkIcon = this.state.bookmarked ? <i className="fa fa-star" /> : <i className="fa fa-bookmark" />;
    return (
      <div className="business-detail-add">
        <div
          className="business-detail-add-bookmark"
          onClick={this.state.bookmarked ? this.unbookmarkBusiness : this.bookmarkBusiness}
        >
          {bookmarkIcon}
          <div className="business-detail-add-bookmark-tooltip">{bookmarkText}</div>
        </div>
        <div className="business-detail-add-review" onClick={this.startReviewing}>
          <i className="fa fa-pencil" />
          <div className="business-detail-add-review-tooltip">Add a review</div>
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.business) {
      return <Loading />;
    }

    return (
      <div id="business-detail">
        {this.renderMap()}
        <div id="business-detail-info">
          <div className="business-detail-info-name">{this.props.business.name}</div>
          {this.renderAverageRating()}
          <p>
            {this.props.business.ratings.length} Reviews || {this.props.business.price}
          </p>
          <p>
            {this.props.business.street_address}, {this.props.business.city}, {this.props.business.state},{' '}
            {this.props.business.zip}
          </p>
          <p>{this.props.business.tags.join(', ')}</p>
        </div>
        <div className="line" />
        <div id="business-detail-reviews">
          <h1>REVIEWS</h1>
          {this.renderReviewForm()}
          <ReviewIndexContainer reviews={this.props.reviews} />
        </div>
        {this.renderAddButtons()}
      </div>
    );
  }
}

export default BusinessDetail;
