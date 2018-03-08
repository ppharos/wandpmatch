/**
 * The main App.
 */
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Match } from './Match';
import { About } from './About';
import { MatchTable } from './MatchTable';
import { Contact } from './Contact';
import { Oops } from './Oops';
import { Footer } from './Footer';
import '../styles/styles.scss';

export class App extends Component {
  constructor(props) {
    super(props);
    /** Import json. */
    const matchesJSON = require('../matches.json');
    // console.log(matches);
    // this.state = { matches: matchesJSON, index: 0 };
    this.state = { matches: matchesJSON.matches };
  }

  render() {
    var id;
    return (
      <div>
        <Header />
        <Switch>
          {/** For unknown reasons, this now has to be 'exact' */}
          <Route exact path="/" render={() => <Match matches={this.state.matches} index={0} />} />
          <Route path="/match/:id" render={id => <Match matches={this.state.matches} index={id} />} />
          <Route exact path="/about" component={About} />
          <Route exact path="/matches" render={() => <MatchTable matches={this.state.matches} />} />
          <Route exact path="/contact" component={Contact} />
          <Route path="*" component={Oops} />
        </Switch>
        {/** 
          rr3.
          (() => {
            switch (this.props.location.pathname) {
              case '/':
              return <Match matches={this.state.matches} />;
            case '/about':
            return <About />;
            case '/matches':
              return <MatchTable matches={this.state.matches} />;
              case '/contact':
              return <Contact />;
              default:
              return <Oops />;
            }
          })() */}
        <Footer />
      </div>
    );
  }
}
