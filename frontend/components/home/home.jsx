import React from 'react';
import HeaderContainer from '../header/header_container';
import HomeIndex from './home_index';

class Home extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <section id="home-cover-img">
          <section className="layer">
            <p>"one cannot think well, love well, sleep well, if one has not dined well"</p>
            <h4>- virginia woolf</h4>
          </section>
        </section>
        <HomeIndex />
      </div>
    );
  }
}

export default Home;
