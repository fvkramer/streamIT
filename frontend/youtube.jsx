import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//test import start
import { login } from './util/session_api_util'

//test import end 

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');

    //Testing START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    //Testing END

    ReactDOM.render(<Root store={store}/>, root);
});
