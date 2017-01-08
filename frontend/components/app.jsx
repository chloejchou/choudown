import React from 'react';
import SessionFormContainer from './session_form/session_form_container';

const App = ({ children }) => (
  <div id="main">
    <section id="chou-down">
      <h1>chou down</h1>
    </section>
    <SessionFormContainer />
    <section id="woolf">
      <p>one cannot think well, </p>
      <p>love well, </p>
      <p>sleep well, </p>
      <p>if one has not dined well</p>
      <p>- virginia woolf</p>
    </section>
    { children }
  </div>
);

export default App;
