import { combineReducers } from 'redux';
import users from './users_reducer';
import videos from './videos_reducer';
import userChannels from './user_channel_reducer';

export default combineReducers({
    users,
    videos,
    userChannels
})