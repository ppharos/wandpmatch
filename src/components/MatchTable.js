/**
 * The list of matches, presented in matrix form.
 */
import { Component, PropTypes } from 'react';
import '../styles/matchtable.scss';

export class MatchTable extends Component {
  constructor(props) {
    super(props);
    this.state = { indexNo: 0 };
  }

  render() {
    var matchBoxes = [];
    for (var i = 0; i < 9; i++) {
      matchBoxes.push(<img key={i} />);
    }

    return (
      <div>
        <h2>Match List</h2>
        <div className="matchTable">{matchBoxes}</div>
      </div>
    );
  }
}
