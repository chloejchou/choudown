import React from 'react';
import HomeIndexItem from './home_index_item';

class HomeIndex extends React.Component {
  render() {

    const popularTags = {
      "italian": "https://source.unsplash.com/12eHC6FxPyg/",
      "coffee": "https://source.unsplash.com/gH5BrIGSPyU/",
      "asian": "https://source.unsplash.com/LDxq4MnYB5U/",
      "dessert": "https://source.unsplash.com/MkFTAO4lROs/",
      "vegetarian": "https://source.unsplash.com/oFljzK61O1s/",
      "bakeries": "https://source.unsplash.com/AumHYHRn2AM/",
      "american": "https://source.unsplash.com/E6HjQaB7UEA/",
      "sandwiches": "https://source.unsplash.com/Gg5-K-mJwuQ/",
      "brunch": "https://source.unsplash.com/y3aP9oo9Pjc/",
      "breweries": "https://source.unsplash.com/MYxvETrYabg/",
      "seafood": "https://source.unsplash.com/qvIrI4ueqzY/",
      "mexican": "https://source.unsplash.com/aZOqcEK2KuQ/",
      "foodtrucks": "https://source.unsplash.com/o58cEDAnPB8/"
    };

    return(
      <div id="home-index">
        <ul className="col col-1-3">
          {Object.keys(popularTags).slice(0, 4).map((tag, idx) => (
            <HomeIndexItem tag={tag} key={idx} src={popularTags[tag]}/>
          ))};
        </ul>
        <ul className="col col-1-3">
          {Object.keys(popularTags).slice(4, 9).map((tag, idx) => (
            <HomeIndexItem tag={tag} key={idx} src={popularTags[tag]}/>
          ))};
        </ul>
        <ul className="col col-1-3">
          {Object.keys(popularTags).slice(9, popularTags.length).map((tag, idx) => (
            <HomeIndexItem tag={tag} key={idx} src={popularTags[tag]}/>
          ))};
        </ul>
      </div>
    );
  }

}

export default HomeIndex;
