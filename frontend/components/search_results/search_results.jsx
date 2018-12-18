import React from 'react';
import { connect } from 'react-redux';
import { searchVideos } from '../../actions/video_actions';
 

const msp = state => ({
  videos: state.entities.videos
})

const mdp = dispatch => ({
  searchVideos: searchQuery => dispatch(searchVideos(searchQuery))
})

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.videos;
  }

  componentDidMount() {
    const { searchQuery } = this.props.match.params;
    this.props.searchVideos(searchQuery)
  }

  render() {
    // let videos = this.state.videos
    return (
      <section className="video-results-container">
        In Search Component
      </section>
      
    )
  }
}

const SearchResultsContainer = connect(msp, mdp)(SearchResults)
export default SearchResultsContainer;
