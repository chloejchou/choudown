import React from 'react';
import { withRouter } from 'react-router';
import Loading from '../loading';

class FeaturedBusiness extends React.Component {
  constructor(props) {
    super(props);
    // WHEN CHANGING BUSINESSES:
    // be sure to modify the text and pictures in the render function
    this.state = {
      featuredId: 71
    };

    this.redirectToBusiness = this.redirectToBusiness.bind(this);
  }

  redirectToBusiness() {
    this.props.router.push(`/businesses/${this.state.featuredId}`);
  }

  componentDidMount() {
    // aina
    this.props.requestFeaturedBusiness(this.state.featuredId);
  }

  render() {
    const business = this.props.featuredBusiness[this.state.featuredId];

    if (!business) {
      return <Loading />;
    }

    return(
      <div id="featured-business">
        <h2>{"Featured Business*"}</h2>
        <h3>‘āina</h3>
        <h4>" āina is a Hawaiian word meaning the land which feeds us "</h4>
        <div>
          <div className="col col-1-2">
            <p>
              Aloha! ‘āina is a modern Hawaiian food concept that serves food
              with a distinct Hawaiian influence with a breath of the classics.
              Everything we serve is from the land and rooted in what the land
              has given to us.
            </p>
            <img src="https://static1.squarespace.com/static/561c7ed1e4b0ec370dd173f9/t/58006dba2994ca4ae4e9baa9/1460441363406/aina-1010595.jpg?format=1500w"></img>
            <p>
              We cook with the seasons and with love, using
              fine dining techniques and local ingredients from the Bay Area
              as well as specially imported ingredients from Hawai'i.
            </p>
            <img src="https://static1.squarespace.com/static/561c7ed1e4b0ec370dd173f9/t/5800f39420099e26aedb3726/1460437297634/'aina-mdx-85-fave.jpg?format=2500w"></img>
          </div>
          <div className="col col-1-2">
            <img src="https://static1.squarespace.com/static/561c7ed1e4b0ec370dd173f9/56e6f97d8259b5f1d57a9a81/571548ffe32140294d95dc5a/1461217398702/'aina-mdx-333-fave.jpg"></img>
            <p>
              The ‘āina concept strives to be a love letter to the islands,
              by merging the attraction of Hawaiian-inspired cuisine,
              the warmth and hospitality of the island spirit with a refined
              sensibility and great service in a casual and welcoming atmosphere.
            </p>
            <img src="https://static1.squarespace.com/static/561c7ed1e4b0ec370dd173f9/56e6f97d8259b5f1d57a9a81/571546fa60b5e99b8bc0e03b/1461217398608/'aina-mdx-171-fave.jpg"></img>
          </div>
        </div>
        <button onClick={this.redirectToBusiness}>check our their reviews</button><br />
        <a href="http://www.ainasf.com/">{"*all information is property of the ‘āina website"}</a>
      </div>
    );
  }
}

export default withRouter(FeaturedBusiness);
