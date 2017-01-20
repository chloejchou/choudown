import { RECEIVE_TAGS } from '../actions/tag_actions';

const defaultState = [
  {
    id: 1,
    name: "Grocery"
  },
  {
    id: 2,
    name: "Italian"
  },
  {
    id: 3,
    name: "Pasta Shops"
  },
  {
    id: 4,
    name: "Pizza"
  },
  {
    id: 5,
    name: "Bars"
  },
  {
    id: 6,
    name: "Wine Bars"
  },
  {
    id: 7,
    name: "American (New)"
  }
];

const tagReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TAGS:
      return action.tags;
    default:
      return oldState;
  }
};

export default tagReducer;
