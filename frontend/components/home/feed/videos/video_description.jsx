import React from 'react';

const VideoDescription = (props) => {
  return (
    <div className="video-description">
      <h5>{props.title}</h5>
      Creator
      <span>Views {props.view_count}</span>
    </div>
  );
}

export default VideoDescription;