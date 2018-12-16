import React from 'react';
import Video from './videos/video';

const Movies = () => {
  return (
    <div className="feed-sub-container-5">
      <div className="feed-title-header">
        <span>Movies</span>
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

export default Movies;