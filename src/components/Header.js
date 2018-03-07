/**
 * The app header and navigation bar.
 */
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';

export class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <h1>Wine and Painting Matching</h1>
        </Link>
        <nav>
          <ul>
            <Link to="/about">
              <li>about |</li>
            </Link>
            <Link to="/matches">
              <li>matches |</li>
            </Link>
            <Link to="/contact">
              <li>contact</li>
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
}
