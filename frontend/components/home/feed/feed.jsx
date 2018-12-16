import React from 'react';

import Recommended from './recommended';
import Music from './music';
import Sports from './sports';
import Gaming from './gaming';
import Movies from './movies';
import Misc from './movies';

const Feed = () => {
  return (
    <div>
      <section className="feed-main-container">
        <Recommended />
        <Music />
        <Sports />
        <Gaming />
        <Movies />
        <Misc />
      </section>
    </div>
  )
}

export default Feed;