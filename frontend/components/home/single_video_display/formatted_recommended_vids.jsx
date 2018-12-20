import React from 'react';
import VideoDisplay from '../feed/videos/video_display';

const FormattedRecommendedVideo = props => {
  return (
    <div className="formatted-recommended-video-container">
        <VideoDisplay video_id={props.id} image_preview={props.image_preview} />
      <div className="formatted-video-metadata">
        <h6>{props.title}</h6>
        <div className="formatted-channel-views">
          <div>{props.channel}</div>
          <div>{props.views} views</div>
        </div>
      </div>
    </div>
  )
} 

export default FormattedRecommendedVideo