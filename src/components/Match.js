/**
 * The wine & painting match loader.
 */
import { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import '../styles/match.scss';

//  Import left/right chevron icons
import Left from 'react-icons/lib/fa/chevron-left';
import Right from 'react-icons/lib/fa/chevron-right';

import { Sharer } from './Sharer';
import { Wine } from './Wine';
import { Painting } from './Painting';

//  Get the current url (in the future to be from the db)
const matchUrl = 'https://www.theguardian.com/uk';
/** Import json. */
const matches = require('../matches.json').matches;
const entriesNo = matches.length;

export class Match extends Component {
  constructor(props) {
    super(props);
    // this.state = { entryNo: entriesNo - 1 };
    this.state = { entryNo: 0 };
  }

  /**
   * @deprecated
   * Load an older match - necessary because or rr's problem with nested routes
   */
  loadOlder(index) {
    if (index != this.entriesNo - 1) index++;
    this.setState({ entryNo: index });
  }

  /**
   * @deprecated
   *   Load a newer match - necessary because or rr's problem with nested routes
   */
  loadNewer(index) {
    if (index > 0) index--;
    this.setState({ entryNo: index });
  }

  /** Loads the value from a caller's index. */
  loadFromIndex(callerIndex) {
    //  Parse the param
    // const matchIndex = this.props.match.params.matchIndex;
    const index = callerIndex != null ? parseInt(callerIndex) : entriesNo - 1;
    this.setState({ entryNo: index });
  }

  /** When the component is loaded but not updated. Because rr is stupid like that. */
  componentWillReceiveProps(nextProps) {
    const matchIndex = nextProps.match.params.matchIndex;
    this.loadFromIndex(matchIndex);
  }

  /** When the component is first loaded. */
  componentDidMount() {
    const matchIndex = this.props.match.params.matchIndex;
    this.loadFromIndex(matchIndex);
  }

  render() {
    const entryNo = this.state.entryNo;
    //  The slice index. We use an inverse id order, hence we need to work backwards
    const index = entriesNo - 1 - entryNo;
    //  Get the match
    const match = matches.slice(index, index + 1)[0];
    // console.log(match);

    return (
      <div>
        {/**<Sharer index={this.state.entryNo} />*/}
        <Sharer matchEntry={match} />
        <div>
          {index != 0 ? (
            <Link to={`/match/${entryNo + 1}`}>
              <Left className="arrow" />
            </Link>
          ) : (
            <Left className="arrow hidden" />
          )}
          <div className="box wine">
            {matches.slice(index, index + 1).map((match, i) => <Wine key={i} {...match.wine} />)}
          </div>
          <div className="box">
            {matches.slice(index, index + 1).map((match, i) => <Painting key={i} {...match.painting} />)}
          </div>
          {index != entriesNo - 1 ? (
            <Link to={`/match/${entryNo - 1}`}>
              <Right className="arrow" />
            </Link>
          ) : (
            <Right className="arrow hidden" />
          )}
        </div>
      </div>
    );
  }
}
