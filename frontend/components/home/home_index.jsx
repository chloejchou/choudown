import React from 'react';
import HomeIndexItem from './home_index_item';

class HomeIndex extends React.Component {
  render() {

    const popularTags = {
      "Bakeries": "https://source.unsplash.com/AumHYHRn2AM/",
      "Cafes": "https://source.unsplash.com/gH5BrIGSPyU/",
      "Asian Fusion": "https://source.unsplash.com/LDxq4MnYB5U/",
      "Desserts": "https://source.unsplash.com/MkFTAO4lROs/",
      "Vegetarian": "https://source.unsplash.com/oFljzK61O1s/",
      "Italian": "https://source.unsplash.com/12eHC6FxPyg/",
      "American": "https://source.unsplash.com/E6HjQaB7UEA/",
      "Sandwiches": "https://source.unsplash.com/Gg5-K-mJwuQ/",
      "Breakfast & Brunch": "https://source.unsplash.com/y3aP9oo9Pjc/",
      "Breweries": "https://source.unsplash.com/MYxvETrYabg/",
      "Seafood": "https://source.unsplash.com/qvIrI4ueqzY/",
      "Mexican": "https://source.unsplash.com/aZOqcEK2KuQ/",
      "Food Trucks": "https://source.unsplash.com/o58cEDAnPB8/"
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
