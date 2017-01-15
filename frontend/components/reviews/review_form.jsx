import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 0, review_text: ""};

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
  }

  componentDidMount() {
    let formPos = $('#review-form').offset().top - 100;
    let formWidth = $('#review-form').width();

    $(window).scroll(() => {
      const windowPos = $(window).scrollTop();
      if (windowPos > formPos) {
        $('#review-form').addClass("fixed").css({ width: formWidth });
      } else {
        $('#review-form').removeClass("fixed").css({ width: "" });
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
    this.props.createReview(this.props.businessId, this.state).then(() => {
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
            <button><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
          </form>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
