import { connect } from 'react-redux';
import MastHeadSearch from './masthead_search';

//
import { searchVideos } from '../../../actions/video_actions';

// need to write search api query
// uses search term to query database for all videos
const mdp = dispatch => ({
  searchVideos: searchQuery => dispatch(searchVideos(searchQuery)),
});

export default connect(null, mdp)(MastHeadSearch);
