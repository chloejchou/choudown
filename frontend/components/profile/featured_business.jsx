import React from 'react';
import { withRouter } from 'react-router';
import Loading from '../loading';

class FeaturedBusiness extends React.Component {
  constructor(props) {
    super(props);
    // WHEN CHANGING BUSINESSES:
    // be sure to modify the text and pictures in the render function
    this.state = {
      featuredId: 71,
    };

    this.redirectToBusiness = this.redirectToBusiness.bind(this);
  }

  redirectToBusiness() {
    this.props.router.push(`/businesses/${this.state.featuredId}`);
  }

  componentDidMount() {
    this.props.requestFeaturedBusiness(this.state.featuredId);
  }

  render() {
    const business = this.props.featuredBusiness[this.state.featuredId];

    if (!business) {
      return <Loading />;
    }

    return (
      <div id="featured-business">
        <h2>{'Featured Business*'}</h2>
        <h3>‘āina</h3>
        <h4>" āina is a Hawaiian word meaning the land which feeds us "</h4>
        <div>
          <div className="col col-1-2">
            <p>
              Aloha! ‘āina is a modern Hawaiian food concept that serves food with a distinct Hawaiian influence with a
              breath of the classics. Everything we serve is from the land and rooted in what the land has given to us.
            </p>
            <img src="http://res.cloudinary.com/dtwr3pge0/image/upload/v1518217970/aina_Brunch_spread_by_Allie.Eats_March_2017_Highres_qmh7oz.jpg" />
            <p>
              We cook with the seasons and with love, using fine dining techniques and local ingredients from the Bay
              Area as well as specially imported ingredients from Hawai'i.
            </p>
            <img src="http://res.cloudinary.com/dtwr3pge0/image/upload/v1518218163/aina-9_POKE_by_Bay_Area_Food_Critics_d2vfeu.jpg" />
          </div>
          <div className="col col-1-2">
            <img src="http://res.cloudinary.com/dtwr3pge0/image/upload/v1518217970/aina_Octopus_Luau_Bay_Area_Food_Critics_vdlpmk.jpg" />
            <p>
              The ‘āina concept strives to be a love letter to the islands, by merging the attraction of
              Hawaiian-inspired cuisine, the warmth and hospitality of the island spirit with a refined sensibility and
              great service in a casual and welcoming atmosphere.
            </p>
            <img src="http://res.cloudinary.com/dtwr3pge0/image/upload/v1518218321/aina_FOOD_Highres-5_Guava_Malasadas_u2ovof.jpg" />
          </div>
        </div>
        <button onClick={this.redirectToBusiness}>check our their reviews</button>
        <br />
        <a href="http://www.ainasf.com/">
          {'*all information is property of the'} <strong>‘āina website</strong>
        </a>
      </div>
    );
  }
}

export default withRouter(FeaturedBusiness);
