import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 0, review_text: "", uploadedFile: "", uploadedFileCloudinaryUrl: ""};

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  // for a fixed review form
  // componentDidMount() {
  //   let formPos = $('#review-form').offset().top - 100;
  //   let formWidth = $('#review-form').width();
  //
  //   $(window).scroll(() => {
  //     const windowPos = $(window).scrollTop();
  //     if (windowPos > formPos) {
  //       $('#review-form').addClass("fixed").css({ width: formWidth });
  //     } else {
  //       $('#review-form').removeClass("fixed").css({ width: "" });
  //     }
  //   });
  // }

  onImageDrop(files) {
    this.setState({ uploadedFile: files[0] });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
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
        console.log("success");
        this.setState({ uploadedFileCloudinaryUrl: response.body.secure_url });
      }
    });
  }

  handleStarClick(e) {
    const num = e.target.id.slice(-1);
    for (let i = num; i > 0; i--) {
      document.getElementById(`star-${i}`).className = "filled-star";
    }
    this.setState({ rating: num });
  }

  handleTextChange(e) {
    this.setState({ review_text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newReview = { rating: this.state.rating, review_text: this.state.review_text };
    this.props.createReview(this.props.businessId, newReview).then(() => {
      this.setState({ rating: 0, review_text: ""});
      for (let i = 1; i <= 5; i++) {
        document.getElementById(`star-${i}`).className = "";
      }
    });
  }

  render() {

    return (
      <div id="review-form-container" className="col col-1-2">
        <div className="separator"></div>
        <div>
          <form id="review-form" onSubmit={this.handleSubmit}>
            <h1>Leave A Review</h1>
            <div className="rating">
              <span id="star-5" onClick={this.handleStarClick}>☆</span>
              <span id="star-4" onClick={this.handleStarClick}>☆</span>
              <span id="star-3" onClick={this.handleStarClick}>☆</span>
              <span id="star-2" onClick={this.handleStarClick}>☆</span>
              <span id="star-1" onClick={this.handleStarClick}>☆</span>
            </div>
            <textarea value={this.state.review_text} onChange={this.handleTextChange}></textarea>
            <br /><br />
            <div id="image-drop-container">
              <p>Drag or click to upload an image (optional)</p>
              <Dropzone
                className="image-drop col col-1-2"
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop}>
                <i className="fa fa-cloud-upload" aria-hidden="true"></i>
              </Dropzone>
              <Dropzone
                className="image-drop col col-1-2"
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop}>
                <i className="fa fa-cloud-upload" aria-hidden="true"></i>
              </Dropzone>
            </div>
            <br /><br />
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
