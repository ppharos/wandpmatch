<<<<<<< HEAD
/**
 * The wine & painting match loader.
 */
import { Component, PropTypes } from 'react';
import '../styles/match.scss';

//  Import left/right chevron icons
import Left from 'react-icons/lib/fa/chevron-left';
import Right from 'react-icons/lib/fa/chevron-right';
import { Wine } from './Wine';
import { Painting } from './Painting';

export class Match extends Component {
  constructor(props) {
    super(props);
    this.state = { indexNo: 0 };
  }

  //  Load an older match
  loadOlder(index) {
    if (index != this.props.matches.length - 1) index++;
    this.setState({ indexNo: index });
  }

  //  Load a newer match
  loadNewer(index) {
    if (index > 0) index--;
    this.setState({ indexNo: index });
  }

  render() {
    const entriesNo = this.props.matches.length;

    return (
      <div>
        <h2>Latest Match</h2>
        <div>
          {this.state.indexNo != 0 ? (
            <Left className="arrow" onClick={() => this.loadNewer(this.state.indexNo)} />
          ) : (
            <Left className="arrow hidden" />
          )}
          <div className="box wine">
            {this.props.matches
              .slice(this.state.indexNo, this.state.indexNo + 1)
              .map((match, i) => <Wine key={i} {...match.wine} />)}
          </div>
          <div className="box">
            {this.props.matches
              .slice(this.state.indexNo, this.state.indexNo + 1)
              .map((match, i) => <Painting key={i} {...match.painting} />)}
          </div>
          {this.state.indexNo != this.props.matches.length - 1 ? (
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
=======
/**
 * The wine & painting match loader.
 */
import { Component, PropTypes } from 'react';
import '../styles/match.scss';

//  Import left/right chevron icons
import Left from 'react-icons/lib/fa/chevron-left';
import Right from 'react-icons/lib/fa/chevron-right';
import { Wine } from './Wine';
import { Painting } from './Painting';

export class Match extends Component {
  constructor(props) {
    super(props);
    this.state = { indexNo: 0 };
  }

  //  Load an older match
  loadOlder(index) {
    if (index != this.props.matches.length - 1) index++;
    this.setState({ indexNo: index });
  }

  //  Load a newer match
  loadNewer(index) {
    if (index > 0) index--;
    this.setState({ indexNo: index });
  }

  render() {
    const entriesNo = this.props.matches.length;

    return (
      <div>
        <h2>Latest Match</h2>
        <div>
          {this.state.indexNo != 0 ? (
            <Left className="arrow" onClick={() => this.loadNewer(this.state.indexNo)} />
          ) : (
            <Left className="arrow hidden" />
          )}
          <div className="box wine">
            {this.props.matches
              .slice(this.state.indexNo, this.state.indexNo + 1)
              .map((match, i) => <Wine key={i} {...match.wine} />)}
          </div>
          <div className="box">
            {this.props.matches
              .slice(this.state.indexNo, this.state.indexNo + 1)
              .map((match, i) => <Painting key={i} {...match.painting} />)}
          </div>
          {this.state.indexNo != this.props.matches.length - 1 ? (
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
>>>>>>> 8ac8812580362e23c6ed1602d7374f60ce56c6e6
