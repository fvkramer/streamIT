import { connect } from 'react-redux';
import { login, signup, logout } from '../../actions/session_actions';

import Greeting from './greeting';

const msp = ({session, entities: { users }}) => ({
    currentUser: users[session.id]
})

const mdp = dispatch => ({
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    logout: () => dispatch(logout())
})

export default connect(msp, mdp)(Greeting);
