import React from 'react';
import { connect } from 'react-redux';

import VideoDisplay from './video_display';
import VideoDescription from './video_description';
import { fetchVideo } from '../../../../actions/video_actions'; 

const msp = state => {
  return {
    videos: state.entities.videos
  } 
}

const mdp = dispatch => ({
  fetchVideo: id => dispatch(fetchVideo(id))
})

const Video = (props) => {
  return ( 
    <div className="video-container">
      <VideoDisplay videos={props.videos} fetchVideo={props.fetchVideo}/>
      <VideoDescription />
    </div>
  )
}

export default connect(msp, mdp)(Video);
