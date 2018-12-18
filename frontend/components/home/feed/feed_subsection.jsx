import React from 'react';
import Video from './videos/video';

class FeedSubsection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="feed-sub-container">
        <div className="feed-title-header">
          <span>{this.props.channel_id}</span>
          <button className="subscribe-button">Subscibe 673K</button>
        </div>

        <div className="feed-sub-item-container-recommended">
          <div><Video /></div>
          <div><Video /></div>
          <div><Video /></div>
          <div><Video /></div>
          <div><Video /></div>
        </div>
      </div>
    )
  } 
}

export default FeedSubsection;