/**
 * The list of matches, presented in matrix form.
 */
import { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import '../styles/matchtable.scss';

/** Import json. */
const matches = require('../matches.json').matches;

export class MatchTable extends Component {
  render() {
    return (
      <div>
        <h2 className="match">Match List</h2>
        <div className="matchTable">
          {matches.map((match, i) => (
            <Link key={i} to={`/match/${match.index}`}>
              <div className="matchBox">
                <div className="preview">
                  <img src={match.wine.label} />
                  <p>{match.wine.producer}</p>
                </div>
                <div className="preview">
                  <img src={match.painting.repro} />
                  <p>{match.painting.producer}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
