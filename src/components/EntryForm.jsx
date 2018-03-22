/**
 * The entry form for new matches.
 */
import { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { ImageDrop } from './ImageDrop';
import '../styles/entryform.scss';

/** Import json. */
var matches = require('../matches.json').matches;

export class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      labelImage: '',
      reproImage: '',
    };

    // Binds the submit to the refs. Unsure what that means.
    this.submit = this.submit.bind(this);
    //  Binds the uploads to the class ?)
    this.labelUpload = this.labelUpload.bind(this);
    this.reproUpload = this.reproUpload.bind(this);

    //  Bind the updateEntry
    this.updateValue = this.updateValue.bind(this);
  }

  /** Set the label to upload to that of a passed file. */
  labelUpload(file) {
    this.setState({
      labelImage: file,
    });
  }

  /** Set the reproduction to upload to that of a passed file. */
  reproUpload(file) {
    this.setState({
      reproImage: file,
    });
  }

  /** On Submit, add data to the json and copy files locally. */
  submit(e) {
    e.preventDefault();

    //  Set the entry no
    var entryNo = matches[0].entryNo + 1;

    // Record the input data
    var wine = this.state.wine;
    var painting = this.state.painting;

    //  Create the object to record
    var match = {
      entryNo: entryNo,
      wine: wine,
      painting: painting,
    };

    // console.log(match);

    //  Add item to the top of the json file
    matches.unshift(match);

    console.log(matches);
  }

  /** Updates the state with the value of an input.  */
  updateValue = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const wine = this.state.wine;
    const painting = this.state.painting;
    const updateValue = this.updateValue;

    return (
      <div>
        <div className="logout">
          <button onClick={this.props.logout}> Logout </button>{' '}
        </div>{' '}
        <form onSubmit={this.submit}>
          <div className="ibox">
            <h2> Wine </h2> <label htmlFor="wine.producer"> Producer </label>{' '}
            <input id="wine.producer" onChange={updateValue} value={wine.producer} type="text" required />
            <label htmlFor="wine.work"> Label </label>{' '}
            <input id="wine.work" onChange={updateValue} value={wine.work} type="text" required />
            <label htmlFor="wine.vintage"> Vintage </label>{' '}
            <input id="wine.vintage" onChange={updateValue} value={wine.vintage} type="text" required />
            <label htmlFor="wine.details"> Terroir </label>{' '}
            <input id="wine.details" onChange={updateValue} value={wine.details} type="text" required />
            <label htmlFor="label" className="top">
              Label{' '}
            </label>{' '}
            <ImageDrop
              id="label"
              text={'Drop a wine label image or click to select a file to upload.'}
              upload={this.labelUpload}
            />{' '}
          </div>{' '}
          <div className="ibox">
            <h2> Painting </h2>
            <label htmlFor="painting.producer"> Artist </label>{' '}
            <input id="painting.producer" onChange={updateValue} type="text" value={painting.producer} required />
            <label htmlFor="painting.work"> Work </label>{' '}
            <input id="painting.work" onChange={updateValue} type="text" value={painting.work} required />
            <label htmlFor="painting.year"> Year </label>{' '}
            <input id="painting.year" onChange={updateValue} type="text" value={painting.year} required />
            <label htmlFor="painting.type"> Materials/Dimensions </label>{' '}
            <input id="painting.type" onChange={updateValue} type="text" value={painting.type} required />
            <label htmlFor="painting.venue"> In </label>{' '}
            <input id="painting.venue" onChange={updateValue} type="text" value={painting.venue} required />
            <label htmlFor="painting.link"> Link </label>{' '}
            <input id="painting.link" onChange={updateValue} type="text" value={painting.link} required />
            <label htmlFor="repro" className="top">
              Pic{' '}
            </label>{' '}
            <ImageDrop
              id="repro"
              text={'Drop a painting pic or click to select a file to upload.'}
              upload={this.reproUpload}
            />{' '}
          </div>{' '}
          <div className="msgbox">
            <label className="center" htmlFor="notes">
              Notes{' '}
            </label>{' '}
            <textarea id="notes" value={wine.notes} type="text" onChange={updateValue} />
          </div>{' '}
          <div className="submit">
            <button> Add </button>{' '}
          </div>{' '}
        </form>{' '}
      </div>
    );
  }
}
