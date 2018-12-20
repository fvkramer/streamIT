import React from 'react';

const VideoDescription = (props) => {
  return (
    <div className="video-description">
      <h5>{props.title}</h5>
      <div id="metadata">
        <div id="video-feed-channel">{props.creator}</div>
        <div><span>{props.view_count} views &bull; 1 year ago</span></div>
      </div>
    </div>
  );
}

export default VideoDescription;