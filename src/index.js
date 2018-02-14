import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { App } from './components/App';
import { Oops } from './components/Oops';

window.React = React;

/** Render the title object. */
render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="about" component={App} />
    <Route path="matches" component={App} />
    <Route path="contact" component={App} />
    <Route path="*" component={Oops} />
  </Router>,
  document.getElementById('react-container')
);
