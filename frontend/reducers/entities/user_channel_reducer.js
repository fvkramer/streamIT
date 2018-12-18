import { RECEIVE_A_CHANNEL } from '../../actions/channel_actions';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_A_CHANNEL:
      return Object.assign({}, state, { [action.channel.id]: action.channel });
    default:
      return state;
  }
}