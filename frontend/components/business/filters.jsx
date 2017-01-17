import React from 'react';
import { withRouter } from 'react-router';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.price) {
      this.state = { prices: this.props.price.split(',') };
    } else {
      this.state = { prices: [] };
    }

    this.handleCheck = this.handleCheck.bind(this);
    this.isChecked = this.isChecked.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tag !== this.props.tag && !nextProps.price) {
      this.setState({ prices: [] });
    } else if (nextProps.tag !== this.props.tag && nextProps.price) {
      this.setState({ prices: nextProps.price.split(',') });
    }
  }

  handleCheck(e) {
    if (e.target.checked) {
      this.state = { prices: [...this.state.prices, e.target.value] };
    } else {
      const index = this.state.prices.indexOf(e.target.value);
      const newStatePrices = this.state.prices.slice(0);
      newStatePrices.splice(index, 1);
      this.state = { prices: newStatePrices };
    }

    if (this.state.prices.length > 0) {
      this.props.router.replace(`businesses-search?page=1&tag=${this.props.tag}&price=${this.state.prices.join(',')}`);
    } else {
      this.props.router.replace(`/businesses-search?page=1&tag=${this.props.tag}`);
    }
  }

  isChecked(price) {
    if (this.state.prices.indexOf(price) === -1) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return(
      <div id="filters">
        <label htmlFor="price">Price Filter:</label>
          $<input type="checkbox" name="price" value="$" onChange={this.handleCheck} checked={this.isChecked("$")}/>
        $$<input type="checkbox" name="price" value="$$" onChange={this.handleCheck} checked={this.isChecked("$$")}/>
      $$$<input type="checkbox" name="price" value="$$$" onChange={this.handleCheck} checked={this.isChecked("$$$")}/>
    $$$$<input type="checkbox" name="price" value="$$$$" onChange={this.handleCheck} checked={this.isChecked("$$$$")}/>
      </div>
    );
  }
}

export default withRouter(Filters);
