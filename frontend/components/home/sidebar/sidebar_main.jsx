import React from 'react';

const SideBarMain = () => {
  return (
    <div className="sidebar-main-top">
      Main Navigation
     <ul>
      <li><a href=""><button className="home-icon"></button><span>Home</span></a></li>
      <li><a href=""><button className="trending-icon"></button><span>Trending</span></a></li>
      <li><a href=""><button className="history-icon"></button><span>History</span></a></li>
     </ul>  
    </div>
  )
}

export default SideBarMain