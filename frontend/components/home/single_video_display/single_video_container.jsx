import React from 'react';
import { connect } from 'react-redux';

import { fetchVideo } from '../../../actions/video_actions';
import { findRecommendedVideos } from '../../../actions/search_actions';

import FormattedRecommendedVideo from './formatted_recommended_vids';


const msp = state => ({
  video: state.entities.videos,
  recommendedVids: state.entities.searchedVideos
})

const mdp = dispatch => ({
  fetchVideo: id => dispatch(fetchVideo(id)),
  findRecommendedVideos: category => dispatch(findRecommendedVideos(category))
})

class SingleVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videoId: this.props.match.params.videoId
    }
  }
  
  componentDidMount() {
    let sidebar = document.getElementById("sidebar-component")
    sidebar.parentNode.removeChild(sidebar);

    this.props.fetchVideo(this.state.videoId);
  }
  
  render() {
    const video_object = this.props.video
    const videoId = this.props.match.params.videoId;
    const video = video_object[videoId];
    
    if (video === undefined) {
      return null;
    }

    if (Object.values(this.props.recommendedVids).length === 0) {
      this.props.findRecommendedVideos(this.props.video[videoId].category)
      return null;
    }

    const recommendedVideos = Object.values(this.props.recommendedVids)
                                    .map(video => {
                                      return (
                                          <FormattedRecommendedVideo
                                            key={video.id}
                                            id={video.id}
                                            title={video.title}
                                            channel={video.channel_title}
                                            image_preview={video.thumbnail}
                                            views={video.view_count}
                                          /> 
                                      )
                                    })
    
    return(
      <div className="single-video-display-container">

        <section className="single-video-image-container">
          <video controls src={video.src} height="400"></video>
        </section>

        <section className="single-video-info">
          <article className="single-video-specific-details">

            <div className="single-video-title-views">
              <h1 className="video-title-header">{video.title}</h1>  
              <div id="video-data-info">
                <span>{video.view_count} views</span>
                <div className="video-likes"></div>
              </div>
            </div>

            <div className="single-video-channel-info">

              <div id="top-row">
                <img width="40" height="40" src="https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png" alt=""/>
               <div id="top-row-details">
                  <a href="">{video.channel_title}</a>
                  {/* {video.created_at} */}
                  <span>Published on Oct 22, 2017</span>
               </div>
                
                <button className="subscribe-button">Subscibe 333K</button>
              </div>

              <div className="video-info">
                <div id="video-category">
                  Category <a href="">{video.category}</a>
                </div>
                <div id="video-description">
                  Show More
                </div>
              </div>
            </div>

            <div className="single-video-channel-comments">
              -------------- Comments Disabled For This Channel --------------
            </div>
          </article>
          <aside className="single-video-recommended-videos">
              <h1>Up Next</h1>
              {recommendedVideos}
          </aside>
        </section>
      </div>
    )
  }
}

export default connect(msp, mdp)(SingleVideo);
