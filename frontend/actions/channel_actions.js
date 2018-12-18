import * as UserChannelAPIUtil from '../util/channel_api_util'

export const RECEIVE_A_USER = 'RECEIVE_A_USER';

export const receiveUserChannel = user => ({
  type: RECEIVE_A_USER,
  user
})


export const fetchUserChannel = id => dispatch =>  (
  UserChannelAPIUtil.fetchUserChannel(id)
    .then(user => dispatch(receiveUserChannel(user)))
)

