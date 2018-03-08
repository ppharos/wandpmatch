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

export class App extends Component {
  constructor(props) {
    super(props);
    // console.log(matches);
    // this.state = { matches: matchesJSON, index: 0 };
    // this.state = { matches: matchesJSON.matches };
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
          <Route exact path="/" render={() => <Redirect to="/match/0" />} />
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
