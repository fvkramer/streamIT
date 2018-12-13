import React from 'react';

const BestLinks = () => {
  return (
    <div className="sidebar-main-best-links">
      <h6>BEST OF YOUTUBE</h6>
      <ul>
        <li><a href=""><button className="yt-best-music"></button><span>Music</span></a></li>
        <li><a href=""><button className="yt-best-sports"></button><span>Sports</span></a></li>
        <li><a href=""><button className="yt-best-gaming"></button><span>Gaming</span></a></li>
        <li><a href=""><button className="yt-best-movies"></button><span>Movies</span></a></li>
        <li><a href=""><button className="yt-best-tvshows"></button><span>TV Shows</span></a></li>
        <li><a href=""><button className="yt-best-news"></button><span>News</span></a></li>
        <li><a href=""><button className="yt-best-live"></button><span>Live</span></a></li>
        <li><a href=""><button className="yt-best-spotlight"></button><span>Spotlight</span></a></li>
        <li><a href=""><button className="yt-best-360"></button><span>360 Video</span></a></li>
        <br/>
        {/* <li><a href=""><button className="test-button"></button><span>Test</span></a></li> */}
      </ul>
    </div>
  )
}

export default BestLinks