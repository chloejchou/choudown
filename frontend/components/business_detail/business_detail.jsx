import React from 'react';

class BusinessDetail extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h3>id: {this.props.params.businessId}</h3>
      </div>
    );
  }
}

export default BusinessDetail;
