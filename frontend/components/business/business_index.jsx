import React from 'react';
import BusinessIndexItem from './business_index_item';
import HeaderContainer from '../header/header_container';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestBusinesses();
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <ul>
          {Object.keys(this.props.businesses).map(id => (
            <BusinessIndexItem key={id} business={this.props.businesses[id]} requestBusiness={this.props.requestBusiness} />
          ))}
        </ul>
      </div>
    );
  }
}

export default BusinessIndex;
