import React from 'react';
import SessionFormContainer from './session_form/session_form_container';

const App = ({ children }) => (
  <div id="main">
    <section id="chou-down">
      <h1>chou down</h1>
      <p>one cannot think well, love well, sleep well,</p>
      <p>if one has not <strong>dined well</strong></p>
    </section>
    <SessionFormContainer />
    { children }
  </div>
);

export default App;
