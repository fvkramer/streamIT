import React from 'react';
import { connect } from 'react-redux';

import { fetchVideo } from '../../../actions/video_actions';


const msp = state => ({
  video: state.entities.videos
})

const mdp = dispatch => ({
  fetchVideo: id => dispatch(fetchVideo(id))
})

class SingleVideo extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    let sidebar = document.getElementById("sidebar-component")
    sidebar.parentNode.removeChild(sidebar);

    const { videoId } = this.props.match.params;
    this.props.fetchVideo(videoId);
  }
  
  render() {
    const video_object = this.props.video
    const videoId = this.props.match.params.videoId;
    const video = video_object[videoId];
    
    if (video === undefined) {
      return null;
    }

    // debugger;
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
              Channel Info
              <div>
                {video.channel_title}
                {video.created_at}
                <button className="subscribe-button">Subscibe 333K</button>
              </div>
              <div className="vide-category-info">
                Category {video.category}
              </div>
            </div>
            <div className="single-video-channel-comments">
              -------------- Comments Disabled For This Channel --------------
            </div>
          </article>
          <aside className="single-video-recommended-videos">
              Recommended Videos Div
          </aside>
        </section>
      </div>
    )
  }
}

export default connect(msp, mdp)(SingleVideo);