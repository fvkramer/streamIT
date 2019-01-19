import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../../actions/modal_actions';
import { logout } from '../../../actions/session_actions';

import MastHeadSearchContainer from './masthead_search_container';


const msp = state => ({
  currentUser: state.entities.users[state.session.id],
});

const mdp = dispatch => ({
  userAuth: (
    <button id="youtube-signin" onClick={() => dispatch(openModal('login'))}>
      SIGN IN
    </button>
  ),
  signOut: (
    <button id="youtube-signout" onClick={() => dispatch(logout())}>
      SIGN OUT
    </button>
  ),
});

const MastHead = ({ userAuth, signOut, currentUser }) => {
  let button;

  if (currentUser) {
    button = signOut;
  } else {
    button = userAuth;
  }

  return (
    <div id="masthead-container-selector" className="masthead-container">
      <button className="masthead-nav-bars"><i className="fa fa-bars" /></button>
      <div className="masthead-logo-container">
        <Link to="/">
          <div>
            <button className="youtube-logo" />
            {' '}
            <span>StreamIT</span>
          </div>
        </Link>
      </div>
      <MastHeadSearchContainer />
      <div className="masthead-icons">
        <button aria-label="Create a video or post" className="msth-create-video" />
        <button aria-label="Youtube Apps" className="msth-youtube-apps" />
        <button aria-label="Messages" className="msth-messages" />
        <button aria-label="Settings" className="msth-settings" />
      </div>
      {/* {userAuth} */}
      {button}
      {/* <a href="#" id="youtube-signin">SIGN IN</a> */}
    </div>
  );
};

export default connect(msp, mdp)(MastHead);
