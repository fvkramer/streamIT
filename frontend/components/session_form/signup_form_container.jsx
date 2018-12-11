import { connect } from 'react-redux';
import { signup } from '../../util/session_api_util';

import SessionForm from './session_form';

//map state to props
const msp = state => ({
    user: {
        username: '',
        password: ''
    },
    formType: "Sign Up"
})

const mdp = dispatch => ({
    action: user => dispatch(signup(user))
})

export default connect(msp, mdp)(SessionForm)