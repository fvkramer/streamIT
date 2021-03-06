import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchVideos } from '../../actions/search_actions';
import VideoDisplay from '../home/feed/videos/video_display';


const msp = (state, ownProps) => ({
  videos: state.entities.searchedVideos,
  searchQuery: ownProps.match.params.searchQuery,
});

const mdp = dispatch => ({
  searchVideos: searchQuery => dispatch(searchVideos(searchQuery)),
});

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: this.props.searchQuery,
    };
  }

  componentDidMount() {
    this.props.searchVideos(this.state.searchQuery);
  }

  componentDidUpdate() {
    if (this.state.searchQuery !== this.props.searchQuery) {
      this.setState({
        searchQuery: this.props.searchQuery,
      });
      this.props.searchVideos(this.props.searchQuery);
    }
  }

  render() {
    const video_objects = Object.values(this.props.videos);
    if (video_objects.length === 0) {
      return (
        <section className="video-results-container">
          <div id="menu-subrender">
            <i>
              <svg className="filter-svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g>
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
                </g>
              </svg>
            </i>
            <span>Filter</span>
          </div>
          <h1 id="nothing-found-header">Sorry, Nothing Found...</h1>
        </section>
      );
    }

    const videos = video_objects.map(video => (
      <div className="video-search-results-container">
        <Link to={`/watch/${video.id}`}>
          <VideoDisplay video_id={video.id} image_preview={video.thumbnail} />
        </Link>
        <div className="video-search-description">
          <h5>{video.title}</h5>
          <div className="video-search-wrapper">
            <span>
              {video.channel_title}
              {' '}
&bull;
            </span>
            {' '}
            <span>
              {video.view_count}
              {' '}
views
            </span>
          </div>
          <p>{video.description}</p>
        </div>
      </div>
    ));

    return (
      <section className="video-results-container">
        <div id="menu-subrender">
          <i>
            <svg className="filter-svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
              <g>
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
              </g>
            </svg>
          </i>
          <span>Filter</span>
        </div>
        {videos}
      </section>
    );
  }
}

const SearchResultsContainer = connect(msp, mdp)(SearchResults);
export default SearchResultsContainer;
