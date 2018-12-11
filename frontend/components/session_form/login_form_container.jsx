import { connect } from 'react-redux';
import { login } from '../../util/session_api_util';

import SessionForm from './session_form';

//map state to props
const msp = state => ({
    user: {
        username: '',
        password: ''
    },
    formType: "Log In"
})

const mdp = dispatch => ({
    action: user => dispatch(login(user))
})

export default connect(msp, mdp)(SessionForm)