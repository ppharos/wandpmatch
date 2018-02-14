/**
 * The app header and navigation bar.
 */
import { Component } from 'react';
import '../styles/header.scss';

export class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <a href="/">
            <h1>Wine and Painting Matching</h1>
          </a>
        </div>
        <nav>
          <ul>
            <a href="/#/about">
              <li>about</li>
            </a>
            <a href="/#/matches">
              <li>matches</li>
            </a>
            <a href="/#/contact">
              <li>contact</li>
            </a>
          </ul>
        </nav>
      </header>
    );
  }
}
