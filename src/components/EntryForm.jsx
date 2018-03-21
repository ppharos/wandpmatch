/**
 * The entry form for new matches.
 */
import { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { ImageDrop } from './ImageDrop';
import '../styles/entryform.scss';

/** Import json. */
const latestMatch = require('../matches.json').matches[0];

export class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: {
        entryNo: latestMatch + 1,
        wine: {
          producer: 'My Test Producer',
          work: 'My Test Wine',
          vintage: 'NV',
          details: 'Wonderland AVA',
          label: '/img/' + 'producer' + '0',
          notes: 'Lorem ipsum instead of notes',
        },
        painting: {
          producer: 'My Test Artist',
          work: 'My Test Artwork',
          year: '1990',
          type: 'Grape juice on glass, 175 x 1 ml',
          venue: 'The Kitchen Table',
          repro: '/img/' + 'artist' + '0',
          link: 'google.com',
        },
      },
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

    //  Set the entry no
    var entryNo = latestMatch.entryNo + 1;

    // Record the input data
    var wine = {
      producer: this.refs.producer.value,
      work: this.refs.wine.value,
      vintage: this.refs.vintage.value,
      details: this.refs.terroir.value,
      label: '/img/' + this.refs.producer.value + entryNo,
      notes: this.refs.notes.value,
    };

    var painting = {
      producer: this.refs.artist.value,
      work: this.refs.work.value,
      year: this.refs.year.value,
      type: this.refs.mats.value,
      venue: this.refs.venue.value,
      repro: '/img/' + this.refs.artist.value + entryNo,
      link: this.refs.link.value,
    };

    //  Create the object to record
    var match = { entryNo: entryNo, wine: wine, painting: painting };

    console.log(match);
  }

  render() {
    const { name, company, location, email, message } = this.props;

    const wine = this.state.match.wine;
    const painting = this.state.match.painting;

    return (
      <div>
        <div className="logout">
          <button onClick={this.props.logout}> Logout </button>
        </div>
        <form onSubmit={this.submit}>
          <div className="ibox">
            <h2> Wine </h2>
            <label htmlFor="producer"> Producer </label>
            <input id="producer" value={wine.producer} type="text" required ref="producer" />
            <label htmlFor="wine"> Wine </label> <input id="wine" value={wine.work} type="text" required ref="wine" />
            <label htmlFor="vintage"> Vintage </label>{' '}
            <input id="vintage" value={wine.vintage} type="text" required ref="vintage" />
            <label htmlFor="terroir"> Terroir </label>{' '}
            <input id="terroir" value={wine.details} type="text" required ref="terroir" />
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
            <input id="artist" type="text" value={painting.producer} required ref="artist" />
            <label htmlFor="work"> Work </label>{' '}
            <input id="work" value={painting.work} type="text" required ref="work" />
            <label htmlFor="year"> Year </label>{' '}
            <input id="year" value={painting.year} type="text" required ref="year" />
            <label htmlFor="mats"> Materials and Dimensions </label>{' '}
            <input id="mats" value={painting.mats} type="text" required ref="mats" />
            <label htmlFor="venue"> Currently at </label>{' '}
            <input id="venue" value={painting.venue} type="text" required ref="venue" />
            <label htmlFor="source"> Link </label>{' '}
            <input id="source" value={painting.link} type="text" required ref="source" />
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
            <textarea id="notes" value={wine.notes} type="text" ref="notes" />
          </div>
          <div className="submit">
            <button> Add </button>
          </div>
        </form>
      </div>
    );
  }
}
