import React from 'react';
import { Link } from 'react-router-dom';

import MastHeadSearchContainer from './masthead_search_container';

const MastHead = () => {
    return (
      <div className="masthead-container">
        <button className="masthead-nav-bars"><i className="fa fa-bars"></i></button>
        <button className="youtube-logo"></button>
        <MastHeadSearchContainer />
        <div className="masthead-icons">
          <button aria-label="Create a video or post" className="msth-create-video"></button>
          <button aria-label="Youtube Apps" className="msth-youtube-apps"></button>
          <button aria-label="Messages" className="msth-messages"></button>
          <button aria-label="Settings" className="msth-settings"></button>
        </div>
        <a href="#" id="youtube-signin">SIGN IN</a>
      </div>
    )
}

export default MastHead;