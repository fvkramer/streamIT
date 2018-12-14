import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';


const mdp = dispatch => ({
  signIn: (
    <button id="youtube-signin" onClick={() => dispatch(openModal('login'))}>
      SIGN IN
    </button>
  )
})

const SideBarSignIn = ({signIn}) => {
  let button = signIn;
  return (
    <div className="sidebar-signin">
      <p>
        Sign in now to see your channels and recommendations!
      </p>
      {button}
    </div>
  )
}

export default connect(null, mdp)(SideBarSignIn);