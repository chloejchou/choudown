import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import BusinessIndexContainer from './business/business_index_container';
import BusinessDetailContainer from './business_detail/business_detail_container';
import HeaderContainer from './header/header_container';
import ProfileContainer from './profile/profile_container';
import ProfileBookmarksContainer from './profile/profile_bookmarks_container';
import ProfileReviewsContainer from './profile/profile_reviews_container';

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
      <Route path= '' component={HeaderContainer} onEnter={_ensureLoggedIn}>
        <Route path='/profile/:userId' component={ProfileContainer} onEnter={_ensureLoggedIn}>
          <Route path='bookmarks' component={ProfileBookmarksContainer} onEnter={_ensureLoggedIn}/>
          <Route path='reviews' component={ProfileReviewsContainer} onEnter={_ensureLoggedIn}/>
        </Route>
        <Route path='/home' component={HomeContainer} onEnter={_ensureLoggedIn}/>
        <Route path='/businesses-search' component={BusinessIndexContainer} onEnter={_ensureLoggedIn} onEnter={() => window.scrollTo(0, 0)}/>
        <Route path = '/businesses/:businessId' component={BusinessDetailContainer} onEnter={_ensureLoggedIn} onEnter={() => window.scrollTo(0, 0)}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
