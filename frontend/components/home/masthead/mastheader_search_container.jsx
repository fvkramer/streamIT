import { connect } from 'react-redux';
import MastHeadSearch from './masthead_search';

//
import { findVideos } from '../../../util/video_api_util';

//need to write search api query
//uses search term to query database for all videos
const mdp = dispatch => ({
  findVideos: searchQuery => dispatch(findVideos(searchQuery))
})


export default connect(null, mdp)(MastHeadSearch);
