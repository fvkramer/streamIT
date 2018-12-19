import React from 'react';

import VideoDisplay from './video_display';
import VideoDescription from './video_description';

const Video = (props) => {
  debugger;
  return ( 
    <div className="video-container">
      <VideoDisplay video_id={props.id} image_preview={props.image_preview}/>
      <VideoDescription 
        title={props.title}
        description={props.description}
        category={props.category}
        view_count={props.view_count}/>
    </div>
  )
}

export default Video;
