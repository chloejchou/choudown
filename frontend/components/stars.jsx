import React from 'react';

export const stars = (rating) => {
  const filledStar = <i className="fa fa-star" aria-hidden="true"></i>;
  const emptyStar = <i className="fa fa-star-o" aria-hidden="true"></i>;

  switch(rating) {
    case 5:
      return <p>{filledStar}{filledStar}{filledStar}{filledStar}{filledStar}</p>;
    case 4:
      return <p>{filledStar}{filledStar}{filledStar}{filledStar}{emptyStar}</p>;
    case 3:
      return <p>{filledStar}{filledStar}{filledStar}{emptyStar}{emptyStar}</p>;
    case 2:
      return <p>{filledStar}{filledStar}{emptyStar}{emptyStar}{emptyStar}</p>;
    case 1:
      return <p>{filledStar}{emptyStar}{emptyStar}{emptyStar}{emptyStar}</p>;
  }
};
