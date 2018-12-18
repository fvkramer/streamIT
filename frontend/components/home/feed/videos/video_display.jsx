import React from 'react';

const VideoDisplay = props => {
  return (
    <div className="video-display">
        <img height="118" width="200" src={props.image_preview} alt=""/>
    </div>
  )
}

export default VideoDisplay;