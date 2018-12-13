import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions'

import MastHeadSearchContainer from './masthead_search_container';

const mdp = dispatch => ({
  userAuth: (
    <button id="youtube-signin" onClick={() => dispatch(openModal('login'))}>
      SIGN IN
    </button>
  )
});

const MastHead = ({userAuth}) => {
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
        {userAuth}
        {/* <a href="#" id="youtube-signin">SIGN IN</a> */}
      </div>
    )
}

export default connect(null, mdp)(MastHead);