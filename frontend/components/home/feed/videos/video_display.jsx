import React from 'react';

class VideoDisplay extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchVideo(14)
  }

  render() {
    let video;
    
    if (this.props.videos[14] === undefined) {
      video = null;
    } else {
      video = (<video
        width="210"
        height="200"
        controls
        src={this.props.videos[14].src}></video>)
    }
    return (
      <div className="video-display">
          {video}
          // "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBIZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7cb7309caf04e9a9fa454f74d96f55b9a58d5d51/fun_fair_video"
      </div>
    )
  }
}

export default VideoDisplay;