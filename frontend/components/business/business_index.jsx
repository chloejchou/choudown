import React from 'react';
import BusinessIndexItem from './business_index_item';
import HeaderContainer from '../header/header_container';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // debugger
    const tag = this.props.location.query.tag;
    this.props.requestBusinesses(tag);
  }

  render() {
    let list;
    if (Object.keys(this.props.businesses).length === 0) {
      list = `Oops! We could not find anything under ${this.props.location.query.tag}. Please try again.`;
    } else {
      list = Object.keys(this.props.businesses).map(id => (
        <BusinessIndexItem key={id} business={this.props.businesses[id]} requestBusiness={this.props.requestBusiness} />
      ));
    }

    return (
      <div>
        <HeaderContainer />
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default BusinessIndex;


// {Object.keys(this.props.businesses).map(id => (
//   <BusinessIndexItem key={id} business={this.props.businesses[id]} requestBusiness={this.props.requestBusiness} />
// ))}
