import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
// import { Oops } from './components/Oops';

window.React = React;

/** Render the title object. */
render(
  // <Router history={hashHistory}>
  //   <Route path="/" component={App} />
  //   <Route path="about" component={App} />
  //   <Route path="matches" component={App} />
  //   <Route path="contact" component={App} />
  //   <Route path="*" component={Oops} />
  // </Router>,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('react-container')
);
