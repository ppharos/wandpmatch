/**
 * The entry form for new matches.
 */
import { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { ImageDrop } from './ImageDrop';
import '../styles/entryform.scss';

export class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelImage: '',
      reproImage: '',
    };

    // Binds the submit to the refs. Unsure what that means.
    this.submit = this.submit.bind(this);
    //  Bind the uploads to the class ?)
    this.labelUpload = this.labelUpload.bind(this);
    this.reproUpload = this.reproUpload.bind(this);
  }

  /** Set the label to upload to that of a passed file. */
  labelUpload(file) {
    this.setState({ labelImage: file });
  }

  /** Set the reproduction to upload to that of a passed file. */
  reproUpload(file) {
    this.setState({ reproImage: file });
  }

  /** On Submit, add data to the json and copy files locally. */
  submit(e) {
    e.preventDefault();
    // console.log('name', this.refs.name.value);
    // console.log('company', this.refs.company.value);
    // console.log('location', this.refs.location.value);
    // console.log('email', this.refs.email.value);
    // console.log('message', this.refs.message.value);

    //
  }

  render() {
    const { name, company, location, email, message } = this.props;

    return (
      <div>
        <div className="logout">
          <button onClick={this.props.logout}> Logout </button>
        </div>
        <form onSubmit={this.submit}>
          <div className="ibox">
            <h2> Wine </h2>
            <label htmlFor="producer"> Producer </label>
            <input id="producer" type="text" required ref="producer" />
            <label htmlFor="wine"> Wine </label> <input id="wine" type="text" required ref="wine" />
            <label htmlFor="vintage"> Vintage </label> <input id="vintage" type="text" required ref="vintage" />
            <label htmlFor="terroir"> Terroir </label> <input id="terroir" type="text" required ref="terroir" />
            <label htmlFor="label" className="top">
              Label
            </label>
            <ImageDrop
              id="label"
              text={'Drop a wine label image or click to select a file to upload.'}
              upload={this.labelUpload}
            />
          </div>
          <div className="ibox">
            <h2> Painting </h2>
            <label htmlFor="artist"> Artist </label>
            <input id="artist" type="text" required ref="artist" />
            <label htmlFor="work"> Work </label> <input id="work" type="text" required ref="work" />
            <label htmlFor="year"> Year </label> <input id="year" type="text" required ref="year" />
            <label htmlFor="mats"> Materials and Dimensions </label> <input id="mats" type="text" required ref="mats" />
            <label htmlFor="venue"> Currently at </label> <input id="venue" type="text" required ref="venue" />
            <label htmlFor="source"> Link </label> <input id="source" type="text" required ref="source" />
            <label htmlFor="repro" className="top">
              Pic
            </label>
            <ImageDrop
              id="repro"
              text={'Drop a painting pic or click to select a file to upload.'}
              upload={this.reproUpload}
            />
          </div>
          <div className="msgbox">
            <label className="center" htmlFor="notes">
              Notes
            </label>
            <textarea id="notes" type="text" ref="notes" />
          </div>
          <div className="submit">
            <button> Add </button>
          </div>
        </form>
      </div>
    );
  }
}
