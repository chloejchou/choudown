import React from 'react';
import HomeIndexItem from './home_index_item';

class HomeIndex extends React.Component {
  render() {

    const popularTags = {
      "Bakeries": "http://res.cloudinary.com/dtwr3pge0/image/upload/v1489545266/ben-garratt-134774-min_zgcsfw.jpg",
      "Cafes": "http://res.cloudinary.com/dtwr3pge0/image/upload/v1489545269/tadas-mikuckis-45432-min_bsmcte.jpg",
      "Asian Fusion": "http://res.cloudinary.com/dtwr3pge0/image/upload/v1489545266/artur-rutkowski-61567-min_em0w5c.jpg",
      "Desserts": "http://res.cloudinary.com/dtwr3pge0/image/upload/v1489545268/igor-ovsyannykov-152531-min_suddyq.jpg",
      "Vegan": "http://res.cloudinary.com/dtwr3pge0/image/upload/v1489545266/adam-jaime-119568-min_bcbtuz.jpg",
      "Italian": "http://res.cloudinary.com/dtwr3pge0/image/upload/v1489545267/eaters-collective-132773-min_dfebej.jpg",
      "American": "http://res.cloudinary.com/dtwr3pge0/image/upload/v1489545267/dan-gold-105699-min_pubzg8.jpg",
      "Sandwiches": "http://res.cloudinary.com/dtwr3pge0/image/upload/v1489545268/eaters-collective-172257-min_ebt0ez.jpg",
      "Breakfast & Brunch": "http://res.cloudinary.com/dtwr3pge0/image/upload/v1489545267/ali-inay-9858-min_egzwpf.jpg",
      "Breweries": "http://res.cloudinary.com/dtwr3pge0/image/upload/v1489545269/pawel-kadysz-90225-min_jowlcs.jpg",
      "Seafood": "http://res.cloudinary.com/dtwr3pge0/image/upload/v1489545266/adrien-sala-46727-min_lrb6yv.jpg",
      "Mexican": "http://res.cloudinary.com/dtwr3pge0/image/upload/v1489545268/herson-rodriguez-96102-min_bqv1jo.jpg",
      "Food Trucks": "http://res.cloudinary.com/dtwr3pge0/image/upload/v1489545268/filip-sablatura-685-min_iruujo.jpg"
    };

    return(
      <div id="home-index">
        <ul className="col col-1-3">
          {Object.keys(popularTags).slice(0, 4).map((tag, idx) => (
            <HomeIndexItem tag={tag} key={idx} src={popularTags[tag]}/>
          ))}
        </ul>
        <ul className="col col-1-3">
          {Object.keys(popularTags).slice(4, 9).map((tag, idx) => (
            <HomeIndexItem tag={tag} key={idx} src={popularTags[tag]}/>
          ))}
        </ul>
        <ul className="col col-1-3">
          {Object.keys(popularTags).slice(9, popularTags.length).map((tag, idx) => (
            <HomeIndexItem tag={tag} key={idx} src={popularTags[tag]}/>
          ))}
        </ul>
      </div>
    );
  }

}

export default HomeIndex;
