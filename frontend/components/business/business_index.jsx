import React from 'react';
import BusinessIndexItem from './business_index_item';
import HeaderContainer from '../header/header_container';
import MapItem from './map';
import Loading from '../loading';
import NoResults from './no_results';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };

    this.businessPositions = this.businessPositions.bind(this);
  }

  componentDidMount() {
    // debugger
    const tag = this.props.location.query.tag;
    this.props.requestBusinesses(tag).then(() => {
      this.setState({ loading: false });
    });
  }

  componentWillReceiveProps(nextProps) {
    // debugger;
    if (nextProps.location.query.tag !== this.props.location.query.tag) {
      const tag = nextProps.location.query.tag;
      this.props.requestBusinesses(tag).then(() => {
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
          name: this.props.businesses[id].name
        }
      );
    });
    return positions;
  }

  render() {
    // debugger
    if (this.state.loading) {
      return(
        <Loading />
      );
    } else if (Object.keys(this.props.businesses).length === 0) {
      return (
        <NoResults tag={this.props.location.query.tag}/>
      );
    }

    const keys = Object.keys(this.props.businesses);
    const mid_idx = Math.floor(keys.length / 2);

    return (
      <div id="search-page">
        <HeaderContainer />
        <div className="separator"></div>
        <div id="business-index">
          <div id="business-list" className="col col-2-3">

            <ul className="col col-1-2">
              {keys.slice(0, mid_idx).map(id => (
                <BusinessIndexItem key={id} business={this.props.businesses[id]} requestBusiness={this.props.requestBusiness} />
              ))}
            </ul>

            <ul className="col col-1-2">
              {keys.slice(mid_idx, keys.length).map(id => (
                <BusinessIndexItem key={id} business={this.props.businesses[id]} requestBusiness={this.props.requestBusiness} />
              ))}
            </ul>

          </div>
          <MapItem center={{lat: 37.7758, lng: -122.435}} businessPositions={this.businessPositions()}/>
        </div>
      </div>
    );
  }
}

export default BusinessIndex;
