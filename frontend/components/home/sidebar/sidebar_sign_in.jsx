import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';


const buttonStyle = {
  padding: '0 15px 0 0',
};
const mdp = dispatch => ({
  signIn: (
    <button id="youtube-signin" style={buttonStyle} onClick={() => dispatch(openModal('login'))}>
      SIGN IN
    </button>
  ),
});

const SideBarSignIn = ({ signIn }) => {
  const button = signIn;
  return (
    <div className="sidebar-signin-container">
      <div className="sidebar-signin-content">
        <p>
          Sign in now to see your channels and recommendations!
        </p>
        {button}
      </div>
    </div>
  );
};

export default connect(null, mdp)(SideBarSignIn);
