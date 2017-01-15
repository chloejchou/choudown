import React from 'react';
import { withRouter } from 'react-router';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = { prices: [] };

    this.handleCheck = this.handleCheck.bind(this);
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
      this.props.router.push(`businesses-search?tag=${this.props.tag}&price=${this.state.prices.join(',')}`);
    } else {
      this.props.router.push(`/businesses-search?tag=${this.props.tag}`);
    }
  }

  render() {
    return(
      <div id="filters">
        <label htmlFor="price">Price Filter:</label>
          $<input type="checkbox" name="price" value="$" onChange={this.handleCheck}/>
          $$<input type="checkbox" name="price" value="$$" onChange={this.handleCheck}/>
          $$$<input type="checkbox" name="price" value="$$$" onChange={this.handleCheck}/>
          $$$$<input type="checkbox" name="price" value="$$$$" onChange={this.handleCheck}/>
      </div>
    );
  }
}

export default withRouter(Filters);
