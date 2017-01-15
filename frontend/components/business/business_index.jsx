import React from 'react';
import BusinessIndexItem from './business_index_item';
import HeaderContainer from '../header/header_container';
import MapItem from '../map';
import Loading from '../loading';
import NoResults from './no_results';
import Filters from './filters';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };

    this.businessPositions = this.businessPositions.bind(this);
  }

  componentDidMount() {
    const tag = this.props.location.query.tag;
    this.props.requestBusinesses(tag).then(() => {
      this.setState({ loading: false });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.query.tag !== this.props.location.query.tag) {
      const tag = nextProps.location.query.tag;
      this.props.requestBusinesses(tag).then(() => {
        this.setState({ loading: false });
      });
    }

    if (nextProps.location.query.price !== this.props.location.query.price) {
      const tag = nextProps.location.query.tag;
      const price = nextProps.location.query.price;
      this.props.requestBusinesses(tag, price).then(() => {
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
    } else if (Object.keys(this.props.businesses).length === 0) {
      return (
        <NoResults tag={this.props.location.query.tag}/>
      );
    }

    const keys = Object.keys(this.props.businesses);
    const mid_idx = Math.floor(keys.length / 2);

    return (
      <div>
        <div className="separator"></div>
        <div id="business-index">
          <div id="business-list" className="col col-2-3">
            <ul className="col col-1-2">
              {keys.slice(0, mid_idx).map(id => (
                <BusinessIndexItem key={id} business={this.props.businesses[id]}/>
              ))}
            </ul>

            <ul className="col col-1-2">
              {keys.slice(mid_idx, keys.length).map(id => (
                <BusinessIndexItem key={id} business={this.props.businesses[id]}/>
              ))}
            </ul>

          </div>
          <div className="col col-1-3">
            <div className="fixed">
              <MapItem
                zoom={12}
                center={{lat: 37.7758, lng: -122.435}}
                businessPositions={this.businessPositions()}
              />
              <Filters requestBusinesses={this.props.requestBusinesses} tag={this.props.location.query.tag}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessIndex;
