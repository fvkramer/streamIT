import React from 'react';
import Video from './videos/video';

const Music = () => {
  return (
    <div className="feed-sub-container-2">
      <span>Music</span>
      <div className="feed-sub-item-container-recommended">
        <div className="grid-item"><Video /></div>
        <div className="grid-item"><Video /></div>
        <div className="grid-item"><Video /></div>
        <div className="grid-item"><Video /></div>
        <div className="grid-item"><Video /></div>
      </div>
    </div> 
  )
}

export default Music;