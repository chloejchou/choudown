import React from 'react';
import BusinessIndexItem from './business_index_item';
import HeaderContainer from '../header/header_container';
import MapItem from './map';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const tag = this.props.location.query.tag;
    this.props.requestBusinesses(tag);
  }

  componentWillReceiveProps() {
    this.setState({ loading: false });
  }

  render() {
    let message = "";
    if (Object.keys(this.props.businesses).length === 0) {
      if (this.state.loading === true) {
        message = 'Loading...';
      } else {
        message = `Oops! We could not find anything under ${this.props.location.query.tag}. Please try again.`;
      }
    }

    const keys = Object.keys(this.props.businesses);
    const mid_idx = Math.floor(keys.length / 2);

    return (
      <div id="search-page">
        <HeaderContainer />
        <div className="separator"></div>
        <div id="business-index">
          <div id="business-list" className="col col-2-3">
            {message}

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
          <MapItem />
        </div>
      </div>
    );
  }
}

export default BusinessIndex;
