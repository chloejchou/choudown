import React from 'react';
import HeaderContainer from './header/header_container';

class Loading extends React.Component {
  render() {
    return(
      <div>
        <HeaderContainer />
        <div className="separator"></div>
        <div className="loading">
          <i className="fa fa-spinner" aria-hidden="true"></i>
          <br /><br />
          <h1>Loading</h1>
        </div>
      </div>
    );
  }
}

export default Loading;
