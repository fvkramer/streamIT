import React from 'react';
import Video from './videos/video';

const Sports = () => {
  return (
    <div className="feed-sub-container-3">
      <span>Sports</span>
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