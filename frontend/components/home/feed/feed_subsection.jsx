import React from 'react';
import Video from './videos/video';

import { fetchUserChannel } from '../../../actions/channel_actions'; 
import { connect } from 'react-redux';

const msp = state => ({
  channelVideos: state.entities.userChannels
})

const mdp = dispatch => ({
  fetchUserChannel: id => dispatch(fetchUserChannel(id))
})

class FeedSubsection extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    this.props.fetchUserChannel(this.props.channel_id);
  }

  render() {
    if (this.props.channelVideos[this.props.channel_id] === undefined) {
      return null;
    }
    // debugger;

    const channel_object = this.props.channelVideos[this.props.channel_id];
    const channel_name = channel_object.username;
    let channel_videos = channel_object.channel_videos.map(video => {
      return (<Video 
        key={video.id}
        title={video.title}
        description={video.description}
        category={video.description}
        image_preview={video.thumbnail}
      />)
    
    });
    const first_five_videos = channel_videos.splice(0, 5);

    return (
      <div className="feed-sub-container">
        <div className="feed-title-header">
          <span>{channel_name}</span>
          <button className="subscribe-button">Subscibe 673K</button>
        </div>
        <div className="feed-sub-item-container-recommended">
          { first_five_videos }
        </div>
      </div>
    )
  } 
}

export default connect(msp, mdp)(FeedSubsection);