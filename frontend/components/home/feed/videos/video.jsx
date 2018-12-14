import React from 'react';
import { connect } from 'react-redux';

import VideoDisplay from './video_display';
import VideoDescription from './video_description';


const msp = state => {
  const videos = Object.values(state.entities.videos)
  return {
    videos: videos
  }
}

const Video = () => {
  return (
    <div className="video-container">
      <VideoDisplay />
      <VideoDescription />
    </div>
  )
}

export default connect(msp)(Video);
