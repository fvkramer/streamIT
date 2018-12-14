import React from 'react';

const SideBarFooter = () => {
  return (
    <div className="sidebar-footer">
      <div className="sidebar-footer-links-container">
        <div id="guidelinks-primary">
          <a href="">About</a>
          <a href="">Press</a>
          <a href="">Copyright</a>
          <br />
          <a href="">Contact us</a>
          <a href="">Creators</a>
          <br />
          <a href="">Advertise</a>
          <a href="">Developers</a>
        </div>

        <div id="guidelinks-secondary">
          <a href="">Terms</a>
          <a href="">Privacy</a>
          <br />
          <a href="">Policy &amp; Safety</a>
          <br />
          <a href="">Test new Features</a>
        </div>

        <div id="copy-streamit">
          &copy; 2018, StreamIt, LLC
        </div>
      </div>   
    </div>
  )
}

export default SideBarFooter;