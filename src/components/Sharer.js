/**
 * The wine & painting match loader.
 */
import { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
// import '../styles/sharer.scss';

//  Import icons
import Facebook from 'react-icons/lib/fa/facebook';
import WhatsApp from 'react-icons/lib/fa/whatsapp';
import Twitter from 'react-icons/lib/fa/twitter';
import Email from 'react-icons/lib/fa/envelope-o';

//  Get the current url (in the future to be from the db)
const wpmUrl = 'https://www.wineandpaintingmatching.com/match/';

export class Sharer extends Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
  }

  /** Shares the current match on social media. */
  shareSocial(site, e) {
    e.preventDefault();
    //  Assign the url and the text
    const match = this.props.matchEntry;
    var matchUrl = wpmUrl + match.entryNo;
    var matchText = encodeURIComponent(match.wine.producer + ' with ' + match.painting.producer + '!');

    var socialUrl;
    switch (site) {
      case 'fb':
        socialUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + matchUrl;
        break;
      case 'wa':
        socialUrl = '"whatsapp://send?text=' + matchUrl;
        break;
      case 'twitter':
        socialUrl = 'https://twitter.com/share?text=' + matchText + '&url=' + matchUrl;
        break;
    }
    // console.log(socialUrl);
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

    var refText = 'mailto:?to=&subject=' + eSubject + '&body=' + eBody + wpmUrl + this.props.index;

    // console.log(refText);

    return refText;
  }

  render() {
    return (
      <div>
        <Link to="/">
          <h2 className="match underlined">Latest Match</h2>
        </Link>
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
      </div>
    );
  }
}
