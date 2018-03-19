/**
 * The back office screen.
 * Requires a successful login to enter.
 */
import { Component } from 'react';
import { Login } from './Login';
import { EntryForm } from './EntryForm';
import '../styles/login.scss';

//  This will actually remember the state
var success = localStorage.getItem('logged') == null ? false : localStorage.getItem('logged');
//  This will remember the state until the next browser refresh
// var success = false;

export class BackOffice extends Component {
  constructor(props) {
    super(props);
    //  The state holds vars for successful login and what page to show
    this.state = { logged: success, show: '' };
    console.log('success:' + success);
    console.log('state:' + this.state.logged);
    //  Bind the log in and log out handler
    this.loggedIn = this.loggedIn.bind(this);
    this.logout = this.logout.bind(this);
  }

  /** On init show the login page. */
  componentWillMount() {
    console.log('local storage:' + localStorage.getItem('logged'));
    console.log('CWM state:' + this.state.logged);
    console.log('boolean check:' + (this.state.logged == true));
    console.log('boolean check:' + (this.state.logged == 'true'));
    //  Unbelievably this has to be checked as a string because stupid stupid localStorage doesn't support booleans
    if (this.state.logged == 'true') {
      this.setState({
        logged: true,
        show: <EntryForm logout={this.logout} />,
      });
    } else {
      this.setState({
        logged: false,
        //  pass the function as a param
        show: <Login logged={this.loggedIn} />,
      });
    }
  }

  /** Show Contributor page. */
  loggedIn() {
    //  Set state to true and save to local storage
    success = true;
    localStorage.setItem('logged', true);

    this.setState({ show: <EntryForm /> });
  }

  /** Logs out the user and shows the main screen. */
  logout() {
    // Clear the logged status
    localStorage.setItem('logged', false);
    //  Change the success variable
    this.success = false;

    // Change state to logged out
    this.setState({ logged: false, show: <Login logged={this.loggedIn} /> });
  }

  render() {
    return <div>{this.state.show}</div>;
  }
}
