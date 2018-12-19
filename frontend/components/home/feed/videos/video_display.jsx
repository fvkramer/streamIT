import React from 'react';
import { Link } from 'react-router-dom';

const VideoDisplay = props => {
  return (
    <Link to={`/watch/${props.video_id}`}>
      <div className="video-display">
        <img height="118" width="200" src={props.image_preview} alt="" />
      </div>
    </Link >
  )
}

export default VideoDisplay;