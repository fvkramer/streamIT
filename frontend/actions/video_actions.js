import * as APIUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';


//pojos

export const receiveVideos = (videos) => ({
  type: RECEIVE_VIDEOS,
  videos
}) 

export const receiveVideo = (video) => ({
  type: RECEIVE_VIDEO,
  video
}) 

export const removeVideo = (videoId) => ({
  type: REMOVE_VIDEO,
  videoId
}) 

//thunks
export const fetchVideos = searchQuery => dispatch => (
  APIUtil.fetchVideos(searchQuery).then(videos => dispatch(receiveVideos(videos)))
)

export const fetchVideo = searchQuery => dispatch => (
  APIUtil.fetchVideo(searchQuery).then(video => dispatch(receiveVideo(video)))
)

export const createVideo = video => dispatch => (
  APIUtil.createVideo(video).then(video => dispatch(receiveVideo(video)))
)

export const updateVideo = video => dispatch => (
  APIUtil.updateVideo(video).then(video => dispatch(receiveVideo(video)))
)

export const deleteVideo = videoId => dispatch => (
  APIUtil.deleteVideo(videoId).then(video => dispatch(removeVideo(video.id)))
)