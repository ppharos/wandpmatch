/**
 * The main App.
 */
import { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Match } from './Match';
import { About } from './About';
import { MatchTable } from './MatchTable';
import { Contact } from './Contact';
import { Oops } from './Oops';
import { Footer } from './Footer';
import '../styles/styles.scss';

const matches = require('../matches.json').matches;
const entriesNo = matches.length;

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var id;
    return (
      <div>
        <Header />
        <Switch>
          {/** For unknown reasons, this now has to be 'exact'.
           * We set it as a redirect to the latest match.
           */}
          <Route exact path="/" render={() => <Redirect to={`/match/${entriesNo - 1}`} />} />
          <Route path="/match/:matchIndex" component={Match} />
          <Route path="/about" component={About} />
          <Route path="/matches" component={MatchTable} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={Oops} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
