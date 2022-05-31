import React from 'react';
import PropTypes from 'prop-types';
import { first, filter } from 'lodash-es';
import styles from './FileDrop.module.scss';

import { fileUtils } from '@utils/file';

export class FileDrop extends React.Component {

  dropTargetRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      // These counts an issue where entering child components was causing onDragLeave to fire.
      // Not exactly sure why having two separate properties works and only having one does not,
      // but for some reason this wasn't successful with
      //
      //   onDragEnter --> enterCount++;
      //   onDragLeave --> enterCount--; (or `enterCount = Math.max(0, enterCount - 1);` to clamp it at 0, just in case)
      //
      // Also wasn't successful with `pointer-events: none;` in CSS, which just seemed to generate more onDragLeave events.
      enterCount: 0,
      leaveCount: 0
    };
  }

  // adapted from https://medium.com/@650egor/simple-drag-and-drop-file-upload-in-react-2cb409d88929
  componentDidMount() {
    let dropTarget = this.dropTargetRef.current;
    dropTarget.addEventListener('dragenter', this.onDragEnter);
    dropTarget.addEventListener('dragleave', this.onDragLeave);
    dropTarget.addEventListener('dragover', this.onDragOver);
    dropTarget.addEventListener('drop', this.onDrop);
  }

  componentWillUnmount() {
    let dropTarget = this.dropTargetRef.current;
    dropTarget.removeEventListener('dragenter', this.onDragEnter);
    dropTarget.removeEventListener('dragleave', this.onDragLeave);
    dropTarget.removeEventListener('dragover', this.onDragOver);
    dropTarget.removeEventListener('drop', this.onDrop);
  }

  onDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      enterCount: this.state.enterCount + 1
    }, () => {
      if (this.state.enterCount === 1 && this.props.onDragEnter) {
        this.props.onDragEnter(e);
      }
    });
  };

  onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      leaveCount: this.state.leaveCount + 1,
    }, () => {
      if (this.state.enterCount === this.state.leaveCount && this.props.onDragLeave) {
        this.props.onDragLeave(e);

        // Reset the counts firing onDragLeave.
        // Seems hella nasty to have a setState() in a setState callback,
        // but it keeps the numbers a little nicer /shrug.
        this.setState({
          enterCount: 0,
          leaveCount: 0
        });
      }
    });
  };

  onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.onDragOver) {
      this.props.onDragOver(e);
    }
  };

  onDrop = async (e) => {
    const { multiple, accept } = this.props;
    e.preventDefault();
    e.stopPropagation();

    if (this.props.onDrop) {
      this.props.onDrop(e);
    }

    this.setState({
      enterCount: 0,
      leaveCount: 0
    });

    let files = e.dataTransfer.files;
    if (files && files.length) {
      // only take the first file if multiple files aren't allowed
      if (!multiple) {
        files = [first(files)];
      }

      // check file types
      // https://stackoverflow.com/questions/20524306/check-selected-file-matches-accept-attribute-on-an-input-tag
      if (accept) {
        files = filter(files, (file) => accept.test(file.type));
      }

      // process the files
      const processedFiles = await this.readFiles(files);

      if (this.props.onChange) {
        this.props.onChange(processedFiles);
      }

      // Technically incorrect to pass the `e` from the drop event to an onDragLeave callback,
      // and seems like somewhat of a gray area on whether or not dropping a file constitutes a dragLeave,
      // but can reduce some code duplication in component usage:
      //
      // <FileDrop
      //   onDragEnter={() => setFileDragging(true)}
      //   onDragLeave={() => setFileDragging(false)}
      //   ...
      // >
      //
      // instead of including an onDrop callback to duplicate onDragLeave:
      //
      // <FileDrop
      //   onDragEnter={() => setFileDragging(true)}
      //   onDragLeave={() => setFileDragging(false)}
      //   onDrop={() => setFileDragging(false)} <---- oof
      //   ...
      // >
      //
      // Makes a nicer API. Worth it.
      // (if it's not working for you, just delete it /shrug)
      if (this.props.onDragLeave) {
        this.props.onDragLeave(e);
      }
    }
  };

  async readFiles(files) {
    const promises = [];
    for (const file of files) {
      const promise = fileUtils.readAsBase64Async(file);
      promises.push(promise);
    }

    return await Promise.all(promises);
  }

  render() {
    return (
      <div ref={this.dropTargetRef}>
        {this.props.children}
      </div>
    );
  }
}

FileDrop.propTypes = {
  multiple: PropTypes.bool,
  accept: PropTypes.string,
  children: PropTypes.node,
  onDragEnter: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func,
  onChange: PropTypes.func
};

