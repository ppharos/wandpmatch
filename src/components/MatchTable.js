/**
 * The list of matches, presented in matrix form.
 */
import { Component, PropTypes } from 'react';
import '../styles/matchtable.scss';

export class MatchTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const matches = this.props.matches;

    return (
      <div>
        <h2 className="match">Match List</h2>
        <div className="matchTable">
          {matches.map((match, i) => (
            <div key={i} className="matchBox">
              <div className="preview">
                <img src={match.match.wine.label} />
                <p>{match.match.wine.producer}</p>
              </div>
              <div className="preview">
                <img src={match.match.painting.repro} />
                <p>{match.match.painting.producer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
