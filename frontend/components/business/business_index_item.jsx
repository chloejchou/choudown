import React from 'react';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li>{this.props.business.name}</li>
    );
  }
}

export default BusinessIndexItem;
