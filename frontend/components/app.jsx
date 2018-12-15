import React from 'react';
import { Link,
         Route,
         Redirect,
         Switch} from 'react-router-dom';

//containers
import Modal from './modal/modal';
import MastHead from './home/masthead/masthead';
import SectionSideBar from './home/sidebar/feed_sidebar';
import Feed from './home/feed/feed';      

const App = () => (
  <div className="main-container">
    <Modal />
    <header>
      <MastHead />
    </header>
    <section className="main-section">
      <SectionSideBar />
      <Feed />
    </section>
    <Switch>
    </Switch>
  </div>
)

export default App;