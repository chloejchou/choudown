import React from 'react';
import { withRouter } from 'react-router';

class Arrows extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
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

  render() {
    return(
      <div className="arrows">
        <span onClick={this.handleClick("left")}>
          <i className="fa fa-caret-left" aria-hidden="true"></i>
        </span>
        <span onClick={this.handleClick("right")}>
          <i className="fa fa-caret-right" aria-hidden="true"></i>
        </span>
      </div>
    );
  }
}

export default withRouter(Arrows);
