/** The About page for WPM. */
import { Component } from 'react';
import '../styles/styles.scss';
import '../styles/about.scss';

export class About extends Component {
  toggleOpen(name) {
    var text = document.getElementById(name);

    text.className = text.className == 'collapsed' ? 'expanded' : 'collapsed';
  }

  render() {
    return (
      <div className="about">
        <h2 onClick={() => this.toggleOpen('what')}>What</h2>
        <p id="what" className="collapsed">
          Wine and Painting Matching is what it says: a website that recommends wine and painting pairings!
        </p>
        <h2 onClick={() => this.toggleOpen('why-short')}> Why (short version) </h2>
        <p id="why-short" className="collapsed">
          Because I like paintings. And I like wine. And I find that they go well together. But mostly because it is
          really strange to think of something and find out it is actually missing from the Web.
        </p>
        <h2 onClick={() => this.toggleOpen('why-long')}> Why (long version) </h2>
        <div id="why-long" className="collapsed">
          <p>
            The inspiration for this website comes from a Toulouse-Lautrec anecdote: apparently, after dinner Henri used
            to treat his friends to viewings of paintings from his collection, considering them the perfect finale to a
            great dinner.
          </p>
          <p>
            The intention here is slightly different: we've all heard of wine-and-food pairings, and you might have seen
            the trend for wine-and-music pairings. For me, however, the latter is not a great match: while it is
            certainly enjoyable to listen to music while drinking wine, most music changes quite quickly to be a "true"
            match. A three-minute rock song is too brief for a glass of wine; a twenty-minute classical piece will
            change tempo and style quite a lot. As for movies and books, they require too much concentration; it seems
            to me that one can focus on either one or the other.
          </p>
          <p>
            A painting, however, is about the perfect match. Most of us tend to look at paintings for a few minutes, if
            even that. A work of art, however, must be observed significantly longer to be truly seen. Like a glass of
            wine, the art itself remains the same, but layers of initially hidden complexity are revealed to the
            attentive observer. Simultaneously, the static nature of the medium means that it is easy to dip in and out
            of the one to the other, for a truly matching multi-sensory experience.
          </p>
          <p>
            The ubiquity of tablets and smartphones also means that we can enjoy a greater array of paintings than ever
            before, without the need for heavy volumes of art encyclopedias. Where I can, I use links from the excellent
            Google Art project, which provides high resolution images, with good zoom in/out functionality.
          </p>
          <p>So, come and join me! You might find you enjoy paintings (or wine!) more than you thought!</p>
        </div>
        <h2 onClick={() => this.toggleOpen('who')}> Who </h2>
        <p id="who" className="collapsed">
          I like paintings. I like wine. I have no qualifications in either, so I would not recommend taking me too
          seriously. I hope you like the idea though and you're inspired to find more wine & painting matches!
        </p>
        <h2 onClick={() => this.toggleOpen('seriously')}> This is the most pretentious thing I've ever seen! </h2>
        <p id="seriously" className="collapsed">
          *Ahem*. You must not deal with wine much. Or art. If it's any comfort, it's not meant to be taken too
          seriously. The main point I want to make is: "have you tried looking at paintings while drinking wine? They
          actually go very well together!"
        </p>
      </div>
    );
  }
}
