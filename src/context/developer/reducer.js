import { GET_ALL_DEVELOPERS, SET_DEVELOPERS } from './types';

const developerReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_ALL_DEVELOPERS:
      return {
        ...state,
        developers: payload
      };
    case SET_DEVELOPERS:
      return {
        ...state,
        developers: payload
      };
    default:
      throw new Error('There is no action for that type');
  }
};

export default developerReducer;
