import React from 'react';
import HeaderContainer from './header/header_container';

class Loading extends React.Component {
  render() {
    return(
      <div>
        <div className="separator"></div>
        <div className="loading">
          <i className="fa fa-spinner fa-spin fa-3x fa-fw" aria-hidden="true"></i>
          <br /><br />
          <h3>Loading</h3>
        </div>
      </div>
    );
  }
}

export default Loading;
