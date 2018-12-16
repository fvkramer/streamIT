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
        height="150"
        controls
        src={this.props.videos[14].src}></video>)
    }
    return (
      <div className="video-display">
          {video} 
      </div>
    )
  }
}

export default VideoDisplay;