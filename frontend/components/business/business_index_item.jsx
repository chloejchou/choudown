import React from 'react';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="business-list-item">
        <img src={this.props.business.image_url}/>
        <div className="business-list-item-body">
          <p className="business-name">{this.props.business.name}</p>
          <p className="business-address">{this.props.business.street_address}, {this.props.business.city}, {this.props.business.state} {this.props.business.zip}</p>
          <p className="business-price">Price: {this.props.business.price}</p>
          <p>{this.props.business.tags.join(", ")}</p>
        </div>
      </div>
    );
  }
}

export default BusinessIndexItem;
