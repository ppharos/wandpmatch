/**
 * The list of matches, presented in matrix form.
 */
import { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import '../styles/matchtable.scss';

export class MatchTable extends Component {
  constructor(props) {
    super(props);

    // this.state = { index: 0 };
  }

  // {matches.map((match, i) => (
  //   <Link to={{ pathname: '/', state: { indexNo: i } }}>
  //     <div key={i} className="matchBox">
  //       <div key={i + 1} className="preview">
  //         <img src={match.match.wine.label} />
  //         <p>{match.match.wine.producer}</p>
  //       </div>
  //       <div key={i + 2} className="preview">
  //         <img src={match.match.painting.repro} />
  //         <p>{match.match.painting.producer}</p>
  //       </div>
  //     </div>
  //   </Link>
  // ))}
  render() {
    const matches = this.props.matches;
    // console.log(matches);

    return (
      <div>
        <h2 className="match">Match List</h2>
        <div className="matchTable">
          {matches.map((match, i) => (
            <Link to={{ pathname: '/', state: { indexNo: 3 } }}>
              <div key={i} className="matchBox">
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
