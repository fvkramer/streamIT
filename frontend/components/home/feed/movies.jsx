import React from 'react';
import Video from './videos/video';

const Movies = () => {
  return (
    <div className="feed-sub-container-5">
      <span>Movies</span>
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