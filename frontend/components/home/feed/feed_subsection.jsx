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

export default connect(msp, mdp)(FeedSubsection);