import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

//renders component if logged out, otherwise redirects to root url
const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )
    )} />
);


//renders component if logged in, otherwise redirects to login page

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/login" />
        )
    )} />
);


const msp = state => ({
    loggedIn: Boolean(state.session.id)
});

//connect Auth to redux state
export const AuthRoute = withRouter(connect(msp)(Auth));

//connect Protected to redux state
export const ProtectedRoute = withRouter(connect(msp)(Protected));