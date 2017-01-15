import React from 'react';
import HeaderContainer from '../header/header_container';

class NoResults extends React.Component {
  render() {
    return(
      <div>
        <div className="no-results">
          <i className="fa fa-meh-o" aria-hidden="true"></i>
          <br /><br />
          <h1>{`We could not find anything under "${this.props.tag}". Please try again.`}</h1>
        </div>
      </div>
    );
  }
}

export default NoResults;
