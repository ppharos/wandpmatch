/**
 * An image drop component that accepts an image and visualises it below.
 *
 * It accepts the following props:
 *    > text in the upload zone
 */

import { Component, PropTypes } from 'react';
import { Dropzone } from 'react-dropzone';
// import '../styles/entryform.scss';

export class ImageDrop extends Component {
  constructor(props) {
    super(props);
    this.state = { uploadedFile: '' };

    this.onImageDrop = this.onImageDrop.bind(this);
  }

  /** DropZone method that defines what happens when the image is dropped. */
  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0],
    });

    // Save a copy of the image locally
    this.handleImageUpload(files[0]);
  }

  /** Update the state of parent, so it has hold of the URL to upload on submit. */
  handleImageUpload(file) {
    this.props.url = path.dirname(file);
    console.log(this.props.url);
  }

  render() {
    return (
      <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop}>
        <p> {this.props.text} </p>
      </Dropzone>
    );
  }
}
