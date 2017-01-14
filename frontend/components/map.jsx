import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

// has access to businessesPositions, center, & zoom
class MapItem extends React.Component {
  constructor(props) {
    super(props);
    this.addBusiness = this.addBusiness.bind(this);
    this.addWindow = this.addWindow.bind(this);
  }

  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = {
      center: this.props.center,
      zoom: this.props.zoom
    };

    this.map = new google.maps.Map(map, options);

    this.props.businessPositions.forEach(business => this.addBusiness(business));
  }

  componentWillReceiveProps(nextProps) {
    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = {
      center: nextProps.center,
      zoom: nextProps.zoom
    };

    this.map = new google.maps.Map(map, options);

    nextProps.businessPositions.forEach(business => this.addBusiness(business));
  }

  addBusiness(business) {
    const pos = new google.maps.LatLng(business.lat, business.long);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });

    this.addWindow(business, marker);

    marker.addListener('click', () => {
      this.props.router.push(`/businesses/${business.id}`);
    });

  }

  addWindow(business, marker) {
    const windowString = "<div class='map-window'>" +
    `<h1 class='map-name'>${business.name}</h1>` +
    `<h2>${business.address}</h2>` +
    "</div>";
    const window = new google.maps.InfoWindow({
      content: windowString,
      maxWidth: 200
    });

    marker.addListener('mouseover', () => {
      window.open(this.map, marker);
    });

    marker.addListener('mouseout', () => {
      window.close(this.map, marker);
    });

    // hovering over html element
    const htmlElement = document.getElementById(business.name);
    if (htmlElement) {
      htmlElement.onmouseover = () => {
        window.open(this.map, marker);
      };

      htmlElement.onmouseout = () => {
        window.close(this.map, marker);
      };
    }

  }

  render() {
    return (
      <div>
        <div ref="map" id="google-map" />
      </div>
    );
  }
}

export default withRouter(MapItem);
