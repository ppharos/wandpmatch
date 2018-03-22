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
import { BackOffice } from './BackOffice';
import { Oops } from './Oops';
import { Footer } from './Footer';
import '../styles/styles.scss';

//  These can be updated if there're more entries
var matches = require('../matches.json').matches;
var entriesNo = matches.length;
var logged;

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Redirect to={`/match/${entriesNo - 1}`} />} />
          <Route path="/match/:matchIndex" component={Match} />
          <Route path="/about" component={About} />
          <Route path="/matches" component={MatchTable} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin" component={BackOffice} />
          <Route path="*" component={Oops} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
