import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      review_text: '',
      uploadedFile1: '',
      uploadedFileCloudinaryUrl1: '',
      uploadedFile2: '',
      uploadedFileCloudinaryUrl2: '',
    };

    this.defaultState = this.state;

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.uploadIcon = this.uploadIcon.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderImageDropZone = this.renderImageDropZone.bind(this);
  }

  componentDidMount() {
    this.props.clearReviewErrors();
  }

  handleRemove(num) {
    const imageField = `uploadedFile${num}`;
    const urlField = `uploadedFileCloudinaryUrl${num}`;
    return () => {
      this.setState({ [imageField]: '', [urlField]: '' });
    };
  }

  onImageDrop(num) {
    const stateField = `uploadedFile${num}`;
    return files => {
      this.setState({ [stateField]: files[0] });
      this.handleImageUpload(num, files[0]);
    };
  }

  handleImageUpload(num, file) {
    const CLOUDINARY_UPLOAD_PRESET = 'jhqoynic';
    const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dtwr3pge0/upload';

    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        const stateField = `uploadedFileCloudinaryUrl${num}`;
        this.setState({ [stateField]: response.body.secure_url });
      }
    });
  }

  handleStarClick(e) {
    const num = e.target.id.slice(-1);

    for (let j = parseInt(num) + 1; j < 6; j++) {
      document.getElementById(`star-${j}`).className = '';
    }

    for (let i = parseInt(num); i > 0; i--) {
      document.getElementById(`star-${i}`).className = 'filled-star';
    }
    this.setState({ rating: num });
  }

  handleTextChange(e) {
    this.setState({ review_text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newReview = {
      rating: this.state.rating,
      review_text: this.state.review_text,
      photos: [this.state.uploadedFileCloudinaryUrl1, this.state.uploadedFileCloudinaryUrl2],
    };
    this.props.createReview(this.props.businessId, newReview).then(() => {
      this.setState(this.defaultState);
      this.props.clearReviewErrors();
      this.props.closeReviewForm();
    });
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.closeReviewForm();
  }

  uploadIcon(num) {
    const urlField = `uploadedFileCloudinaryUrl${num}`;
    const url = this.state[urlField];
    if (url !== '') {
      return (
        <div className="review-form-attachment">
          <img className="review-form-attachment-img" src={url} />
          <i className="fa fa-times review-form-attachment-delete" onClick={this.handleRemove(num)} />
        </div>
      );
    } else {
      return <i className="fa fa-cloud-upload" />;
    }
  }

  renderErrors() {
    if (this.props.errors.length !== 0) {
      return <ul className="review-form-errors">{this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}</ul>;
    }
  }

  renderImageDropZone() {
    return (
      <div id="image-drop-container">
        <Dropzone className="image-drop" multiple={false} accept="image/*" onDrop={this.onImageDrop(1)}>
          {this.uploadIcon(1)}
        </Dropzone>
        <Dropzone className="image-drop" multiple={false} accept="image/*" onDrop={this.onImageDrop(2)}>
          {this.uploadIcon(2)}
        </Dropzone>
      </div>
    );
  }

  render() {
    return (
      <div id="review-form">
        <div className="review-form-cancel" onClick={this.handleCancel}>
          <i className="fa fa-times" />
        </div>
        <div className="review-rating-container">
          <span className="review-rating-text">I give this place a . . .</span>
          <div className="rating">
            <span id="star-5" onClick={this.handleStarClick}>
              ☆
            </span>
            <span id="star-4" onClick={this.handleStarClick}>
              ☆
            </span>
            <span id="star-3" onClick={this.handleStarClick}>
              ☆
            </span>
            <span id="star-2" onClick={this.handleStarClick}>
              ☆
            </span>
            <span id="star-1" onClick={this.handleStarClick}>
              ☆
            </span>
          </div>
        </div>
        <textarea className="review-form-input" value={this.state.review_text} onChange={this.handleTextChange} />
        {this.renderErrors()}
        {this.renderImageDropZone()}
        <div className="review-form-submit" onClick={this.handleSubmit}>
          <i className="fa fa-arrow-circle-right" />
        </div>
      </div>
    );
  }
}

export default ReviewForm;
