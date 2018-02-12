/**
 * The painting loader.
 */
import { Component } from 'react';
import '../styles/painting.scss';

//  Import left/right chevron icons
import Left from 'react-icons/lib/fa/chevron-left';
import Right from 'react-icons/lib/fa/chevron-right';

export class Painting extends Component {
  render() {
    return (
      <div className="painting">
        <a href={this.props.link} target="_blank">
          <div className="frame">
            <img src={this.props.repro} alt="Le figlie di Loth" />
          </div>
        </a>
        <div className="info">
          <p className="producer">{this.props.producer}</p>
          <p className="work ">{this.props.work}</p>
          <p className="details">{this.props.year}</p>
          <p className="details">{this.props.type}</p>
          <p className="details">{this.props.venue}</p>
        </div>
      </div>
    );
  }
}
