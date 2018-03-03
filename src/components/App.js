/**
 * The main App.
 */
import { Component } from 'react';
import { Header } from './Header';
import { Match } from './Match';
import { About } from './About';
import { MatchTable } from './MatchTable';
import { Contact } from './Contact';
import { Oops } from './Oops';
import { Footer } from './Footer';

export class App extends Component {
  constructor(props) {
    super(props);
    /** Import json. */
    const matchesJSON = require('../matches.json');
    // console.log(matches);
    // this.state = { matches: matchesJSON, index: 0 };
    this.state = { matches: matchesJSON, index: 0 };
  }

  /** If it has been called by a router,
   *  sets the index to a passed value. */
  componentDidMount() {
    var callerIndex = this.props.location.state != null ? this.props.location.state.index : 0;
    console.log('caller index: ' + callerIndex);
    console.log('state index: ' + this.state.index);
    this.setState({ index: callerIndex });
  }

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
              return <Match matches={this.state.matches.matches} index={this.state.index} />;
            case '/about':
              return <About />;
            case '/matches':
              return <MatchTable matches={this.state.matches.matches} />;
            case '/contact':
              return <Contact />;
            default:
              return <Oops />;
          }
        })()}
        <Footer />
      </div>
    );
  }
}
