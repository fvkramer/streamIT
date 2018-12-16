import React from 'react';
import Video from './videos/video';

const Sports = () => {
  return (
    <div className="feed-sub-container-3">
      <div className="feed-title-header">
        <span>Sports</span>
        <button className="subscribe-button">Subscibe 673K</button>
      </div>
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

export default Sports;