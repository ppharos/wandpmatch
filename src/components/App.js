/**
 * The main App.
 */
import { createClass } from 'react';
import { Header } from './Header';
import { Match } from './Match';
import { About } from './About';
import { MatchList } from './MatchList';
import { Contact } from './Contact';
import { Oops } from './Oops';
import { Footer } from './Footer';

export const App = createClass({
  getInitialState() {
    return {
      matches: [
        {
          wine: {
            producer: "Ca' Passion",
            work: 'Il Principe Brut',
            vintage: 'NV',
            details: 'Valdobbiadene Prosecco Superiore Millesimato Brut DOCG',
            label: '/img/principe.png',
            notes:
              'For those used to prosecco as a synonym of frivolity, Ca’ Passion’s Il Principe Brut will be a revelation. While clearly Glera, this is an expression of the grape of which many are unaware. This is a serious, almost austere, dry sparkling with reserved aromas and a steely backbone. It is paired with Carlo Carra’s _Le figlie di Loth_. The mystic landscape, where hues of blue dominate, matches the wine’s cool personality. The classically-informed theme and composition powering a Futurist result, echoes _Il Principe_’s ambition to be elevated above everyday sparkling, inspired by the classic French Bruts, yet pointing towards the future of Valdobiaddene DOCG.',
          },
          painting: {
            producer: 'Carlo Carra',
            work: 'Le figlie di Loth',
            year: '1919',
            type: 'Oil on Canvas, 80 x 111 cm',
            venue: 'Museum of Modern and Contemporary Art of Trento and Rovereto, Italy',
            repro: '/img/cc-figlie.jpg',
            link: 'https://www.google.com/culturalinstitute/beta/asset/le-figlie-di-loth/UAFROe85DhkByQ',
          },
        },
        {
          wine: {
            producer: 'Moët & Chandon',
            work: 'Grand Vintage',
            vintage: '2008',
            details: 'Champagne Brut',
            label: '/img/moet.png',
            notes: 'Lorem Ipsum',
          },
          painting: {
            producer: 'Jacques-Louis David',
            work: 'Portrait du Comte de Turenne',
            year: '1816',
            type: 'Oil on Canvas, 81 x 112 cm',
            venue: 'Private Collection',
            repro: '/img/david.png',
            link: 'https://www.google.com/culturalinstitute/beta/asset/portrait-of-the-comte-de-turenne/RQE9W7iRpt1VoA',
          },
        },
        {
          wine: {
            producer: 'Moët & Chandon',
            work: 'Grand Vintage',
            vintage: '2002',
            details: 'Champagne Brut',
            label: '/img/moet_2002.jpg',
            notes: 'Lorem Ipsum',
          },
          painting: {
            producer: 'Jacques-Louis David',
            work: 'Autoportrait',
            year: '1794',
            type: 'Oil on Canvas, 64 x 81 cm',
            venue: 'Louvre, Paris, France',
            repro: '/img/david2.jpg',
            link: 'https://www.google.com/culturalinstitute/beta/asset/le-figlie-di-loth/UAFROe85DhkByQ',
          },
        },
      ],
    };
  },
  render() {
    return (
      <div className="app">
        <Header />
        {/** 
          Stupid React needs stupid "self-invoking" function call
          whose syntax I don't get.
          */
        (() => {
          switch (this.props.location.pathname) {
            case '/':
              return <Match matches={this.state.matches} />;
            case '/about':
              return <About />;
            case '/matches':
              return <MatchList />;
            case '/contact':
              return <Contact />;
            default:
              return <Oops />;
          }
        })()}
        <Footer />
      </div>
    );
  },
});
