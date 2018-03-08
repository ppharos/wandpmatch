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
    const matchIndex = this.props.match.params.matchIndex;
    console.log('param index' + matchIndex);
    const index = matchIndex != null ? parseInt(matchIndex) : 0;
    console.log('state index' + index);
    this.state = { indexNo: index };
  }

  /**  Load an older match - necessary because or rr's problem with nested routes */
  loadOlder(index) {
    if (index != this.entriesNo - 1) index++;
    this.setState({ indexNo: index });
  }

  /**  Load a newer match - necessary because or rr's problem with nested routes */
  loadNewer(index) {
    if (index > 0) index--;
    this.setState({ indexNo: index });
  }

  loadFromIndex(callerIndex) {
    //  Parse the param
    const matchIndex = this.props.match.params.matchIndex;
    const index = matchIndex != null ? parseInt(matchIndex) : 0;
    this.setState({ indexNo: index });
  }

  componentWillMount() {
    // console.log('Will mount state:' + this.state.indexNo);
  }

  componentDidMount() {
    console.log('Did mount state:' + this.state.indexNo);
  }

  render() {
    const index = this.state.indexNo;

    // console.log(this.props);
    // console.log(entriesNo);

    return (
      <div>
        <Sharer />
        <div>
          {index != 0 ? (
            <Left className="arrow" onClick={() => this.loadNewer(this.state.indexNo)} />
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
            <Right className="arrow" onClick={() => this.loadOlder(this.state.indexNo)} />
          ) : (
            <Right className="arrow hidden" />
          )}
        </div>
      </div>
    );
  }
}

/** Assign default prop types. */
Match.propTypes = {
  // matches: PropTypes.array,
};
