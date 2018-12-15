import { RECEIVE_VIDEOS, 
  RECEIVE_VIDEO, 
  REMOVE_VIDEO } from '../../actions/video_actions';

const _nullVideo = {
  id: null
} 

export default (state = _nullVideo, action) => {
  debugger;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;  
    case RECEIVE_VIDEO:
      return Object.assign({}, { [action.video.id]: action.video})
    case REMOVE_VIDEO:
      let newState = Object.assign({}, state);
      delete newState[action.video.id]
      return newState;
    default:
      return state;
  }
}