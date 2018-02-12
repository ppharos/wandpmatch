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
          <h1>Wine and Painting Matching</h1>
        </div>
        <nav>
          <ul>
            <li>about</li>
            <li>matches</li>
            <li>contact</li>
          </ul>
        </nav>
      </header>
    );
  }
}
