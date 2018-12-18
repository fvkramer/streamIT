import React from 'react';
import { connect } from 'react-redux';
import { openModal} from '../../../actions/modal_actions';
import { logout } from '../../../actions/session_actions';

import MastHeadSearchContainer from './masthead_search_container';


const msp = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mdp = dispatch => ({
  userAuth: (
    <button id="youtube-signin" onClick={() => dispatch(openModal('login'))}>
      SIGN IN
    </button>
  ),
  signOut: (
    <button id="youtube-signout" onClick={() => dispatch(logout())} >
      SIGN OUT
    </button>
  )
});

const MastHead = ({userAuth, signOut, currentUser}) => {
    let button;

    if (currentUser) {
      button = signOut;
    } else {
      button = userAuth;
    }

    return (
      <div id="masthead-container-selector" className="masthead-container">
        <button className="masthead-nav-bars"><i className="fa fa-bars"></i></button>
        <button className="youtube-logo"></button>
        <MastHeadSearchContainer />
        <div className="masthead-icons">
          <button aria-label="Create a video or post" className="msth-create-video"></button>
          <button aria-label="Youtube Apps" className="msth-youtube-apps"></button>
          <button aria-label="Messages" className="msth-messages"></button>
          <button aria-label="Settings" className="msth-settings"></button>
        </div>
        {/* {userAuth} */}
        {button} 
        {/* <a href="#" id="youtube-signin">SIGN IN</a> */}
      </div>
    )
}

export default connect(msp, mdp)(MastHead);