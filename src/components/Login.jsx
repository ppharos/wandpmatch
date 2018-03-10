/**
 * The login form.
 */
import { Component } from 'react';
import '../styles/login.scss';

//  This will be a server file
const users = require('../users.json').users;

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    /** Binds the submit to the refs.  Unsure what that means. */
    this.submit = this.submit.bind(this);
  }

  /** Login if the name is recognised. */
  submit(e) {
    e.preventDefault();
    // var success = false;

    users.forEach(user => {
      if (this.refs.username.value == user.username && this.refs.password.value == user.password) {
        //  Change the state of the parent by invoking the parent function
        this.props.logged();
        // unbelievably, you cannot break out of this
      }
    });
  }

  render() {
    const { username, password } = this.props;

    return (
      <form onSubmit={this.submit} className="login">
        <div>
          <h2 className="underlined"> Contributor Login </h2>
        </div>
        <div>
          <label htmlFor="name"> Username </label>
          <input
            id="name"
            type="text"
            required
            ref="username"
            onChange={(e, newValue) => this.setState({ username: newValue })}
          />
          <label htmlFor="password"> Password </label>
          <input
            id="password"
            type="password"
            required
            ref="password"
            onChange={(e, newValue) => this.setState({ password: newValue })}
          />
        </div>
        <div className="submit">
          <button>Submit</button>
        </div>
      </form>
    );
  }
}
