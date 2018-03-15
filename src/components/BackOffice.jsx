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
  }

  /** On init show the login page. */
  componentWillMount() {
    if (this.state.logged) {
      this.setState({
        show: <EntryForm />,
      });
    } else {
      this.setState({
        //  pass the function as a param
        show: <Login logged={this.loggedIn.bind(this)} />,
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

  render() {
    return <div>{this.state.show}</div>;
  }
}
