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
    this.state = { bookmarked: false, isReviewModalOpen: false };

    this.modalStyle = {
      content: {
        top: '100px',
        left: '100px',
        right: '100px',
        bottom: '100px',
      },
    };

    this.bookmarkBusiness = this.bookmarkBusiness.bind(this);
    this.renderAddButtons = this.renderAddButtons.bind(this);
    this.renderAverageRating = this.renderAverageRating.bind(this);
    this.renderMap = this.renderMap.bind(this);
    this.renderReviewForm = this.renderReviewForm.bind(this);
    this.unbookmarkBusiness = this.unbookmarkBusiness.bind(this);
    this.openReviewModal = this.openReviewModal.bind(this);
    this.closeReviewModal = this.closeReviewModal.bind(this);
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

  openReviewModal() {
    this.setState({ isReviewModalOpen: true });
  }

  closeReviewModal() {
    this.setState({ isReviewModalOpen: false });
  }

  renderReviewForm() {
    return (
      <Modal
        contentLabel="modal"
        style={this.modalStyle}
        isOpen={this.state.isReviewModalOpen}
        onRequestClose={this.closeReviewModal}
      >
        <ReviewForm
          businessId={this.props.params.businessId}
          createReview={this.props.createReview}
          clearReviewErrors={this.props.clearReviewErrors}
          closeModal={this.closeReviewModal}
          errors={this.props.errors}
        />
      </Modal>
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
        <div className="business-detail-add-review" onClick={this.openReviewModal}>
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
          <ReviewIndexContainer reviews={this.props.reviews} />
        </div>
        {this.renderAddButtons()}
        {this.renderReviewForm()}
      </div>
    );
  }
}

export default BusinessDetail;
