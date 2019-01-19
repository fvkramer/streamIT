import React from 'react';

import SectionSideBar from '../sidebar/feed_sidebar';
import Recommended from './recommended';
import FeedSubsection from './feed_subsection';


const Feed = () => {
  const channel_ids = [12, 13, 14, 15, 16, 17, 18, 19, 20];

  const subsections = channel_ids.map(channel_id => (
    <div className="feed-subsection-container">
      <FeedSubsection channel_id={channel_id} />
    </div>
  ));

  return (
    <section className="main-home-container">
      <SectionSideBar />
      <section className="feed-main-container">
        <Recommended />
        {subsections}
      </section>
    </section>
  );
};

export default Feed;
