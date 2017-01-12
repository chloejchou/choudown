import React from 'react';
import BusinessIndexItem from './business_index_item';
import HeaderContainer from '../header/header_container';
import MapItem from './map';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    const tag = this.props.location.query.tag;
    this.props.requestBusinesses(tag).then(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    let message = "";
    if (this.state.loading) {
      return(
        <div>
          <HeaderContainer />
          <div className="separator"></div>
          <div className="loading">
            <i className="fa fa-spinner" aria-hidden="true"></i>
            <br /><br />
            <h1>Loading</h1>
          </div>
        </div>
      );
    } else if (Object.keys(this.props.businesses).length === 0) {
      return (
        <div>
          <HeaderContainer />
          <div className="separator"></div>
          <div className="no-results">
            <i className="fa fa-meh-o" aria-hidden="true"></i>
            <br /><br />
            <h1>{`We could not find anything under "${this.props.location.query.tag}". Please try again.`}</h1>
          </div>
        </div>
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
          <MapItem />
        </div>
      </div>
    );
  }
}

export default BusinessIndex;
