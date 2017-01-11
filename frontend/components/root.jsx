import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import BusinessIndexContainer from './business/business_index_container';

const _redirectIfLoggedIn = (nextState, replace) => {
  if (store.getState().session.currentUser) {
    replace('/home');
  }
};

const _ensureLoggedIn = (nextState, replace) => {
  if (!store.getState().session.currentUser) {
    replace('/');
  }
};

import HomeContainer from './home/home_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App} onEnter={_redirectIfLoggedIn}/>
      <Route path='/home' component={HomeContainer} onEnter={_ensureLoggedIn}/>
      <Route path='/businesses-search' component={BusinessIndexContainer}/>
    </Router>
  </Provider>
);

export default Root;
