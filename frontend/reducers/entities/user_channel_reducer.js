import { RECEIVE_A_USER } from '../../actions/channel_actions';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_A_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
}