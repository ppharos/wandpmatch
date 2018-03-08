import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { App } from './components/App';
// import { Oops } from './components/Oops';

window.React = React;

/** Render the title object. */
render(
  // Updated to rr4 - use hashrouter as we're using a static server (?)
  // <BrowserRouter>
  <HashRouter>
    <App />
  </HashRouter>,
  // </BrowserRouter>,
  document.getElementById('react-container')
);
