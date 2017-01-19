import React from 'react';
import BusinessIndexItem from './business_index_item';
import HeaderContainer from '../header/header_container';
import MapItem from '../map';
import Loading from '../loading';
import NoResults from './no_results';
import Filters from './filters';
import Arrows from './arrows';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };

    this.businessPositions = this.businessPositions.bind(this);
  }

  componentDidMount() {
    const tag = this.props.location.query.tag;
    const price = this.props.location.query.price;
    const page = this.props.location.query.page;
    this.props.requestBusinesses(tag, price, page).then(() => {
      this.setState({ loading: false });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.query.tag !== this.props.location.query.tag ||
        nextProps.location.query.price !== this.props.location.query.price ||
        nextProps.location.query.page !== this.props.location.query.page) {
      const tag = nextProps.location.query.tag;
      const price = nextProps.location.query.price;
      const page = nextProps.location.query.page;
      this.props.requestBusinesses(tag, price, page).then(() => {
        window.scrollTo(0, 0);
        this.setState({ loading: false });
      });
    }
  }

  businessPositions() {
    let positions = [];
    Object.keys(this.props.businesses).forEach(id => {
      positions.push(
        {
          lat: this.props.businesses[id].lat,
          long: this.props.businesses[id].long,
          name: this.props.businesses[id].name,
          id: this.props.businesses[id].id,
          address: this.props.businesses[id].street_address
        }
      );
    });
    return positions;
  }

  render() {
    if (this.state.loading) {
      return(
        <Loading />
      );
    }

    let businessResults;
    if (Object.keys(this.props.businesses).length === 0) {
      businessResults = <NoResults tag={this.props.location.query.tag}/>;
    } else {
      const keys = Object.keys(this.props.businesses);
      const midIdx = Math.floor(keys.length / 2);
      businessResults = (
        <div>
          <ul className="col col-1-2">
            {keys.slice(0, midIdx).map(id => (
              <BusinessIndexItem key={id} business={this.props.businesses[id]}/>
            ))}
          </ul>
          <ul className="col col-1-2">
            {keys.slice(midIdx, keys.length).map(id => (
              <BusinessIndexItem key={id} business={this.props.businesses[id]}/>
            ))}
          </ul>
        </div>
      );
    }

    return (
      <div id="business-index">
        <div className="separator"></div>
        <div id="business-index-map" className="fixed">
          <MapItem
            zoom={13}
            center={{lat: 37.780120, lng: -122.480507}}
            businessPositions={this.businessPositions()}
            />
        </div>
        <div id="business-list-container">
          <div className="arrow-down"><i className="fa fa-chevron-down" aria-hidden="true"></i></div>
          <div id="business-list">
            <Filters
              requestBusinesses={this.props.requestBusinesses}
              tag={this.props.location.query.tag}
              price={this.props.location.query.price}
              />
            {businessResults}
            <Arrows
              numBusinesses={Object.keys(this.props.businesses).length}
              page={this.props.location.query.page}
              tag={this.props.location.query.tag}
              price={this.props.location.query.price}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessIndex;
