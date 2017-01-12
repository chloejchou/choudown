import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import BusinessIndexContainer from './business/business_index_container';
import BusinessDetailContainer from './business_detail/business_detail_container';
import HeaderContainer from './header/header_container';

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
      <Route path= '' component={HeaderContainer}>
        <Route path='/home' component={HomeContainer} onEnter={_ensureLoggedIn}/>
        <Route path='/businesses-search' component={BusinessIndexContainer} onEnter={_ensureLoggedIn}/>
        <Route path = '/businesses/:businessId' component={BusinessDetailContainer} onEnter={_ensureLoggedIn}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
