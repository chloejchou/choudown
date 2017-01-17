import React from 'react';
import { withRouter } from 'react-router';

class Arrows extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.isLeftDisabled = this.isLeftDisabled.bind(this);
    this.isRightDisabled = this.isRightDisabled.bind(this);
  }

  handleClick(dir) {
    return () => {
      if (this.props.price) {
        if (dir === "right") {
          this.props.router.push(`/businesses-search?page=${parseInt(this.props.page) + 1}&tag=${this.props.tag}&price=${this.props.price}`);
        } else if (dir === "left") {
          this.props.router.push(`/businesses-search?page=${parseInt(this.props.page) - 1}&tag=${this.props.tag}&price=${this.props.price}`);
        }
      } else {
        if (dir === "right") {
          this.props.router.push(`/businesses-search?page=${parseInt(this.props.page) + 1}&tag=${this.props.tag}`);
        } else if (dir === "left") {
          this.props.router.push(`/businesses-search?page=${parseInt(this.props.page) - 1}&tag=${this.props.tag}`);
        }

      }
    };
  }

  isLeftDisabled() {
    if (this.props.page === "1") {
      return true;
    }
    return false;
  }

  isRightDisabled() {
    if (this.props.numBusinesses < 10) {
      return true;
    }

    return false;
  }

  render() {
    return(
      <div className="arrows">
        <span>
          <button onClick={this.handleClick("left")} disabled={this.isLeftDisabled()}>
            <i className="fa fa-caret-left" aria-hidden="true"></i>
          </button>
        </span>
        <span>
          <button onClick={this.handleClick("right")} disabled={this.isRightDisabled()}>
            <i className="fa fa-caret-right" aria-hidden="true"></i>
          </button>
        </span>
      </div>
    );
  }
}

export default withRouter(Arrows);
