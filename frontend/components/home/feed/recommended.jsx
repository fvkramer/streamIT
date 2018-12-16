import React from 'react';
import Video from './videos/video';

const Recommended = () => {
  return (
    <div className="feed-sub-container-1">
      <span>Recommended</span>
      <div className="feed-sub-item-container-recommended">
        <div className="grid-item"><Video /></div>
        <div className="grid-item"><Video /></div>
        <div className="grid-item"><Video /></div>
        <div className="grid-item"><Video /></div>
        <div className="grid-item"><Video /></div>
        <div className="grid-item"><Video /></div>
        <div className="grid-item"><Video /></div>
        <div className="grid-item"><Video /></div>
        <div className="grid-item"><Video /></div>
        <div className="grid-item"><Video /></div>
      </div>
    </div>   
  )
}

export default Recommended;