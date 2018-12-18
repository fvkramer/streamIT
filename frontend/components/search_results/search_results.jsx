import React from 'react';
import { connect } from 'react-redux';
import { searchVideos } from '../../actions/search_actions';
import { Link } from 'react-router-dom';
import Video from '../home/feed/videos/video';


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

  // componentDidUpdate(prevProps) {

  // }

  render() {
    let video_objects = Object.values(this.props.videos);
    if (video_objects.length === 0) {

      return null;
    } 
    let videos = video_objects.map(video => {
      return (
        <Link to={`/watch/${video.id}`}><Video
          key={video.id}
          title={video.title}
          description={video.description}
          category={video.category}
          view_count={video.view_count}
          image_preview={video.thumbnail}
          channel_title={video.channel_title}
        />
        </Link>
      )
    })
    
    return (
      <section className="video-results-container">
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
