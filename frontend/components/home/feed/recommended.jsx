import React from 'react';
import Video from './videos/video';

const Recommended = () => {
  return (
    <div className="feed-recommended">
        <div className="feed-recommended-header">
        <span>Recommended</span>
      </div>
      <div className="feed-recommended-contents">
        <div className="grid-container">
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
    </div>   
  )
}

export default Recommended;