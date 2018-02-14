<<<<<<< HEAD
/**
 * The wine loader.
 */
import { Component, PropTypes } from 'react';
import '../styles/wine.scss';

export class Wine extends Component {
  render() {
    return (
      <div className="wine">
        <div className="label info">
          <p className="producer">{this.props.producer}</p>
          <p className="work">
            {this.props.work} {this.props.vintage}
          </p>
          <p className="details">{this.props.details}</p>
        </div>
        <div className="label">
          <img src={this.props.label} height={this.props.labelHeight} alt="Il Principe" />
        </div>
        <div>
          <p className="notes">{this.props.notes}</p>
        </div>
      </div>
    );
  }
}

/**Assign default props. */
Wine.defaultProps = {
  producer: 'Kourtaki',
  work: 'Retsina',
  vintage: 'NV',
  details: 'Industrial',
  notes: 'Avoid',
  labelHeight: 250,
};

/** Assign default prop types. */
Wine.propTypes = {
  producer: PropTypes.string,
  work: PropTypes.string,
  vintage: PropTypes.string,
  details: PropTypes.string,
  notes: PropTypes.string,
  label: PropTypes.string,
  labelHeight: PropTypes.number,
};
=======
/**
 * The wine loader.
 */
import { Component, PropTypes } from 'react';
import '../styles/wine.scss';

export class Wine extends Component {
  render() {
    return (
      <div className="wine">
        <div className="label info">
          <p className="producer">{this.props.producer}</p>
          <p className="work">
            {this.props.work} {this.props.vintage}
          </p>
          <p className="details">{this.props.details}</p>
        </div>
        <div className="label">
          <img src={this.props.label} height={this.props.labelHeight} alt="Il Principe" />
        </div>
        <div>
          <p className="notes">{this.props.notes}</p>
        </div>
      </div>
    );
  }
}

/**Assign default props. */
Wine.defaultProps = {
  producer: 'Kourtaki',
  work: 'Retsina',
  vintage: 'NV',
  details: 'Industrial',
  notes: 'Avoid',
  labelHeight: 250,
};

/** Assign default prop types. */
Wine.propTypes = {
  producer: PropTypes.string,
  work: PropTypes.string,
  vintage: PropTypes.string,
  details: PropTypes.string,
  notes: PropTypes.string,
  label: PropTypes.string,
  labelHeight: PropTypes.number,
};
>>>>>>> 8ac8812580362e23c6ed1602d7374f60ce56c6e6
