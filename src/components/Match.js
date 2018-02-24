/**
 * The wine & painting match loader.
 */
import { Component, PropTypes } from 'react';
import '../styles/match.scss';

//  Import left/right chevron icons
import Left from 'react-icons/lib/fa/chevron-left';
import Right from 'react-icons/lib/fa/chevron-right';
import Facebook from 'react-icons/lib/fa/facebook';
import Twitter from 'react-icons/lib/fa/twitter';
import Email from 'react-icons/lib/fa/envelope-o';

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

  /** Shares the current match on social media. */
  shareSocial(site) {
    // e.preventDefault();

    //  Assign the url, again with some stupid pattern I don't get
    var socialUrl = (function(site) {
      switch (site) {
        case 'fb':
          return 'https://www.facebook.com/sharer/sharer.php?u=';
        case 'twitter':
          return 'https://twitter.com/share?url=';
      }
    })();
    console.log(socialUrl);
    //  Open the window
    window.open(socialUrl + 'google.com', 'sharer', 'height=350,width=600');
    if (window.focus) {
      window.focus();
    }
    return false;
  }

  //  FROM HERE: CREATE SHARER
  render() {
    const entriesNo = this.props.matches.length;

    return (
      <div>
        <h2 className="match">Latest Match</h2>
        <ul className="contact">
          <li>
            <Facebook onClick={this.shareSocial('fb')} />
          </li>
          <li>
            <Twitter onClick={this.shareSocial('twitter')} />
          </li>
          <li>
            <Email />
          </li>
        </ul>
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
