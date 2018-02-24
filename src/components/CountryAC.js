/**
 * The country autocomplete panel for the contact form.
 */
import { Component, PropTypes } from 'react';
import '../styles/contact.scss';

export const countryList = [
  'United Kingdom',
  'United States',
  'France',
  'Italy',
  'Spain',
  'Greece',
  'Portugal',
  'Argentina',
  'Chile',
  'Australia',
  'New Zealand',
  'Other',
];

export class CountryAC extends Component {
  //  Set getter/setter
  get value() {
    return this.refs.country.value;
  }

  set value(inputValue) {
    this.refs.country.value = inputValue;
  }
  render() {
    return (
      <div className="country">
        <label htmlFor="location">Location </label>
        <input ref="country" type="text" list="countryList" />
        <datalist id="countryList">{this.props.options.map((opt, i) => <option key={i}>{opt}</option>)}</datalist>
      </div>
    );
  }
}
