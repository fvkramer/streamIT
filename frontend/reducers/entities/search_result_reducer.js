import { RECEIVE_SEARCHES } from '../../actions/search_actions';

export default (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHES:
      return Object.assign({}, action.videos);
    default:
      return state;
  }
}