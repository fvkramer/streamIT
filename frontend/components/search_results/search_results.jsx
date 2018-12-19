import React from 'react';
import { connect } from 'react-redux';
import { searchVideos } from '../../actions/search_actions';
import { Link } from 'react-router-dom';
import Video from '../home/feed/videos/video';
import VideoDisplay from '../home/feed/videos/video_display';
import VideoDescription from '../home/feed/videos/video_description';


const msp = (state, ownProps) => ({
  videos: state.entities.searchedVideos,
  searchQuery: ownProps.match.params.searchQuery
})

const mdp = dispatch => ({
  searchVideos: searchQuery => dispatch(searchVideos(searchQuery))
})

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: this.props.searchQuery
    }
  }

  componentDidMount() {
    this.props.searchVideos(this.state.searchQuery); 
  }

  render() {
    let video_objects = Object.values(this.props.videos);
    if (video_objects.length === 0) {

      return null;
    } 
    let videos = video_objects.map(video => {
      return (
        <div className="video-search-results-container">
          <Link to={`/watch/${video.id}`}>
            <VideoDisplay video_id={video.id} image_preview={video.thumbnail} />
          </Link>
          <div className="video-search-description">
            <h5>{video.title}</h5>
            <div className="video-search-wrapper">
              <span>{video.channel_title}  &bull;</span> <span>{video.view_count} views</span>
            </div>
            <p>{video.description}</p>
          </div>
        </div>
      )
    })
    
    return (
      <section className="video-results-container">
        <div id="menu-subrender">
          <i>
            <svg className="filter-svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g>
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
            </g></svg>
          </i>
          <span>Filter</span>
        </div>
        {videos}
      </section>  
    )
  }
}

//Infinite Scroll
// window.addEventListener('scroll', () => {
//   const { innerHeight } = window;
//   const { scrollTop, offsetHeight } = document.documentElement;

//   const isBottom = (innerHeight + scrollTop) > (offsetHeight - 5);

//   if (isBottom) {
//     //do cool things like fecth more songs/pics
//   }
// });

const SearchResultsContainer = connect(msp, mdp)(SearchResults)
export default SearchResultsContainer;
