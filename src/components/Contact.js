/**
 * The contact form.
 */
import { Component, PropTypes } from 'react';
import '../styles/contact.scss';

export class Contact extends Component {
  constructor(props) {
    super(props);
    /** Binds the submit to the refs.  Unsure what that means. */
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    console.log('name', this.refs.name.value);
    console.log('company', this.refs.company.value);
    console.log('location', this.refs.location.value);
    console.log('email', this.refs.email.value);
    console.log('message', this.refs.message.value);
  }

  render() {
    const { name, company, location, email, message } = this.props;

    return (
      <form onSubmit={this.submit}>
        <div>
          <p>Want me to match your wine to a painting? Let me know!</p>
        </div>
        <div>
          <label htmlFor="name"> Name* </label>
          <input id="name" type="text" required ref="name" />
          <label htmlFor="company"> Winery / Wine store* </label>
          <input id="company" type="text" required ref="company" />
          <label htmlFor="email">email* </label>
          <input id="email" type="email" required ref="email" />
          <label htmlFor="location">Location </label>
          <input id="location" type="text" ref="location" />
        </div>
        <div className="msgbox">
          <label htmlFor="message">Add a message</label>
          <input id="message" type="text" ref="message" />
        </div>
        <div className="submit">
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   company: PropTypes.string.isRequired,
//   location: PropTypes.string,
//   email: PropTypes.string.isRequired,
//   message: PropTypes.string,
// };
