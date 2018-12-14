import React from 'react';

const VideoDisplay = () => {
  return (
    <div className="video-display">
      Test Video
      <video 
        width="200"
        height="200"
        src="https://s3-us-west-1.amazonaws.com/streamit-videos/Free+Download.mp4"></video>
    </div>
  )
}

export default VideoDisplay;