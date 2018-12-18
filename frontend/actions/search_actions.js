import * as APISearch from '../util/search_api_util';

export const RECEIVE_SEARCHES = 'RECEIVE_SEARCHES;'

export const receiveSearches = videos => ({
  type: RECEIVE_SEARCHES,
  videos
})

export const searchVideos = searchQuery => dispatch => (
  APISearch.searchVideos(searchQuery).then(videos => dispatch(receiveSearches(videos)))
)