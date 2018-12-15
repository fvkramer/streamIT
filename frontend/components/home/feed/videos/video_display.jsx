import React from 'react';

const VideoDisplay = () => {
  return (
    <div className="video-display">
      <video 
        width="210"
        height="200"
        src="https://s3-us-west-1.amazonaws.com/streamit-videos/animations/sintel_blender.mp4"></video>
    </div>
  )
}

export default VideoDisplay;