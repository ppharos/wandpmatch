/** The About page for WPM. */
import { Component } from 'react';
import '../styles/styles.scss';
import '../styles/about.scss';

export class About extends Component {
  render() {
    return (
      <div className="about">
        <a href="#what">
          <h2>What</h2>{' '}
        </a>
        <a href="#why-short">
          <h2> Why (short version) </h2>
        </a>
        <a href="#why-long">
          <h2> Why (long version) </h2>
        </a>
        <a href="#who">
          <h2> Who </h2>
        </a>
        <a href="#seriously">
          <h2> This is the most pretentious thing I've ever seen! </h2>
        </a>
      </div>
    );
  }
}
