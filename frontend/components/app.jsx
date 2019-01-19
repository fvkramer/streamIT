import React from 'react';
import { Route, Switch } from 'react-router-dom';

// containers
import Modal from './modal/modal';
import MastHead from './home/masthead/masthead';
import Feed from './home/feed/feed';
import SectionSideBar from './home/sidebar/feed_sidebar';
import SearchResultsContainer from './search_results/search_results';
import SingleVideoContainer from './home/single_video_display/single_video_container';

const App = () => (
  <div className="main-container">
    <Modal />
    <header>
      <MastHead />
    </header>
    <section className="main-section">
      {/* <SectionSideBar /> */}
      <Route path="/results/:searchQuery" component={SearchResultsContainer} />
      <Route path="/watch/:videoId" component={SingleVideoContainer} />
      <Route exact path="/" component={Feed} />
    </section>
  </div>
);

export default App;
