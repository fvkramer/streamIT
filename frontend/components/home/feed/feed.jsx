import React from 'react';

import Recommended from './recommended';
import FeedSubsection from './feed_subsection';

const Feed = () => {
  // const channels = ["AnimaTV", "Lifestyle Life",
  //                 'Let\'s Learn', "Industry",
  //                 "Beats by Moshe", "Tech at Large",
  //                 "Speedster"]
  const channel_ids = [12, 13, 14, 15, 16, 17,
                      18, 19, 20]
  
  const subsections = channel_ids.map(channel_id => {
    return (
      <div className="feed-subsection-container">
        <FeedSubsection channel_id={channel_id} />
      </div>
    )
  })

  return ( 
    <section className="feed-main-container">
      <Recommended />
      { subsections }
    </section>
  )
}

export default Feed;