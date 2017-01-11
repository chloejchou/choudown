import React from 'react';
import SessionFormContainer from './session_form/session_form_container';

const App = ({ children }) => (
  <div id="main">
    <section id="chou-down">
      <h1>chou down</h1>
      <p>- the sf eats search engine</p>
    </section>
    <SessionFormContainer />
    { children }
  </div>
);

export default App;
