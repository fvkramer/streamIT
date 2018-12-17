import React from 'react';
import { Route } from 'react-router-dom';

//containers
import Modal from './modal/modal';
import MastHead from './home/masthead/masthead';
import SectionSideBar from './home/sidebar/feed_sidebar';
import Feed from './home/feed/feed'; 
import SearchResultsContainer from './search_results/search_results';     

const App = () => (
  <div className="main-container">
    <Modal />
    <header>
      <MastHead />
    </header>
    <section className="main-section">
      <SectionSideBar />
      <Route exact path="/" component={Feed} />
      <Route path="/results/:searchQuery" component={SearchResultsContainer} />
    </section>
  </div>
)

export default App;