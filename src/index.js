import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';

window.React = React;

/** Render the title object. */
render(
  <App
  // matches={[
  //   {
  //     wine: {
  //       producer: "Ca' Passion",
  //       work: 'Il Principe Brut',
  //       vintage: 'NV',
  //       details: 'Valdobbiadene Prosecco Superiore Millesimato Brut DOCG',
  //       label: '/img/principe.png',
  //       notes:
  //         'For those used to prosecco as a synonym of frivolity, Ca’ Passion’s Il Principe Brut will be a revelation. While clearly Glera, this is an expression of the grape of which many are unaware. This is a serious, almost austere, dry sparkling with reserved aromas and a steely backbone. It is paired with Carlo Carra’s _Le figlie di Loth_. The mystic landscape, where hues of blue dominate, matches the wine’s cool personality. The classically-informed theme and composition powering a Futurist result, echoes _Il Principe_’s ambition to be elevated above everyday sparkling, inspired by the classic French Bruts, yet pointing towards the future of Valdobiaddene DOCG.',
  //     },
  //     painting: {
  //       producer: 'Carlo Carra',
  //       work: 'Le figlie di Loth',
  //       year: '1919',
  //       type: 'Oil on Canvas, 111 x 80 cm',
  //       venue: 'Museum of Modern and Contemporary Art of Trento and Rovereto, Italy',
  //       repro: '/img/cc-figlie.jpg',
  //       link: 'https://www.google.com/culturalinstitute/beta/asset/le-figlie-di-loth/UAFROe85DhkByQ',
  //     },
  //   },
  // ]}
  />,
  document.getElementById('react-container')
);
