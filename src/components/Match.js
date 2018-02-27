/**
 * The wine & painting match loader.
 */
import { Component, PropTypes } from 'react';
import '../styles/match.scss';

//  Import left/right chevron icons
import Left from 'react-icons/lib/fa/chevron-left';
import Right from 'react-icons/lib/fa/chevron-right';
import Facebook from 'react-icons/lib/fa/facebook';
import WhatsApp from 'react-icons/lib/fa/whatsapp';
import Twitter from 'react-icons/lib/fa/twitter';
import Email from 'react-icons/lib/fa/envelope-o';

import { Wine } from './Wine';
import { Painting } from './Painting';

//  Get the current url (in the future to be from the db)
const matchUrl = 'https://www.theguardian.com/uk';

export class Match extends Component {
  constructor(props) {
    super(props);
    this.state = { indexNo: 0 };

    this.sendEmail = this.sendEmail.bind(this);
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
  shareSocial(site, e) {
    e.preventDefault();

    //  Assign the url
    var socialUrl;

    //  For some weird reason it doesn't get this otoh works
    switch (site) {
      case 'fb':
        socialUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + matchUrl;
        break;
      case 'wa':
        socialUrl = '"whatsapp://send?text=' + matchUrl;
        break;
      case 'twitter':
        socialUrl = 'https://twitter.com/share?url=' + matchUrl;
        break;
    }
    console.log(socialUrl);
    //  Open the window
    window.open(socialUrl, 'sharer', 'height=350,width=600');
    if (window.focus) {
      window.focus();
    }
    return false;
  }

  /** Opens the email client to send a link with the match. */
  sendEmail() {
    var eSubject = 'Wine%20and%20Painting%20Matching';
    var eBody = 'Check%20out%20this%20wine%20and%20painting%20match!%20';

    var refText = 'mailto:?to=&subject=' + eSubject + '&body=' + eBody + matchUrl;

    console.log(refText);

    return refText;
  }

  render() {
    const entriesNo = this.props.matches.length;

    return (
      <div>
        <h2 className="match">Latest Match</h2>
        <ul className="contact">
          <li>
            <Facebook onClick={this.shareSocial.bind(this, 'fb')} />
          </li>
          <li>
            <WhatsApp onClick={this.shareSocial.bind(this, 'wa')} />
          </li>
          <li>
            <Twitter onClick={this.shareSocial.bind(this, 'twitter')} />
          </li>
          <li>
            <a href={this.sendEmail()}>
              <Email />
            </a>
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
