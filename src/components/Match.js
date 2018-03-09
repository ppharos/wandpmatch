/**
 * The wine & painting match loader.
 */
import { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import '../styles/match.scss';

//  Import left/right chevron icons
import Left from 'react-icons/lib/fa/chevron-left';
import Right from 'react-icons/lib/fa/chevron-right';
// import Facebook from 'react-icons/lib/fa/facebook';
// import WhatsApp from 'react-icons/lib/fa/whatsapp';
// import Twitter from 'react-icons/lib/fa/twitter';
// import Email from 'react-icons/lib/fa/envelope-o';

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
    // Set the state from the passed props.
    //  Parse the param
    // const matchIndex = this.props.match.params.matchIndex;
    // console.log('param index' + matchIndex);
    // const index = matchIndex != null ? parseInt(matchIndex) : 0;
    // console.log('state index' + index);
    // this.state = { indexNo: index };
    this.state = { indexNo: 0 };
  }

  /**
   * @deprecated
   * Load an older match - necessary because or rr's problem with nested routes
   */
  loadOlder(index) {
    if (index != this.entriesNo - 1) index++;
    this.setState({ indexNo: index });
  }

  /**
   * @deprecated
   *   Load a newer match - necessary because or rr's problem with nested routes
   */
  loadNewer(index) {
    if (index > 0) index--;
    this.setState({ indexNo: index });
  }

  /** Loads the value from a caller's index. */
  loadFromIndex(callerIndex) {
    //  Parse the param
    // const matchIndex = this.props.match.params.matchIndex;
    const index = callerIndex != null ? parseInt(callerIndex) : 0;
    this.setState({ indexNo: index });
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
    const index = this.state.indexNo;

    return (
      <div>
        <Sharer index={this.state.indexNo} />
        <div>
          {index != 0 ? (
            <Link to={`/match/${index - 1}`}>
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
            <Link to={`/match/${index + 1}`}>
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
