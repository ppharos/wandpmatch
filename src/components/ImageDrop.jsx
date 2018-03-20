/**
 * An image drop component that accepts an image and visualises it below.
 *
 * It accepts the following props:
 *    > text in the upload zone
 */

import { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import '../styles/entryform.scss';

export class ImageDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFile: '',
      caption: props.text,
    };

    this.onImageDrop = this.onImageDrop.bind(this);
    this.onDropRejected = this.onDropRejected.bind(this);
  }

  /** DropZone method that defines what happens when the image is dropped. */
  onImageDrop(files) {
    //  create the new file reader object and read the file
    const reader = new FileReader();
    //  onload set the result as state
    reader.onload = () => {
      this.setState({ uploadedFile: reader.result, caption: 'Selected image' });
    };
    reader.onabort = () => console.log('File reading aborted');
    reader.onerror = () => console.log('File reading failed');

    reader.readAsDataURL(files[0]);

    // Pass a copy of the image to the entry form state
    this.props.upload(this.state.uploadedFile);
  }

  /** Show an error message if the drop has been rejected. */
  onDropRejected() {
    this.setState({ uploadedFile: '', caption: 'The file type is not suitable. Please select an image file.' });
  }

  render() {
    return (
      <Dropzone
        className="imgDrop"
        acceptClassName="imgAccept"
        rejectClassName="imgReject"
        multiple={false}
        accept="image/jpeg,image/png"
        onDropAccepted={this.onImageDrop}
        onDropRejected={this.onDropRejected}
      >
        <p> {this.state.caption} </p>
        <img className="imgDrop" src={this.state.uploadedFile} />
      </Dropzone>
    );
  }
}
