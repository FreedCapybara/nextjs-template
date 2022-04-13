import React from 'react';
import PropTypes from 'prop-types';
import styles from './file-picker.module.scss';
import { camelCase } from 'lodash-es';

import { fileUtils } from '@utils/file-utils';

export class FilePicker extends React.Component {

  async handleChange(e) {
    const promises = [];
    for (const file of e.target.files) {
      const promise = fileUtils.readAsBase64Async(file);
      promises.push(promise);
    }

    const values = await Promise.all(promises);

    if (this.props.onChange) {
      this.props.onChange(values);
    }
  }

  onChange = (e) => {
    this.handleChange(e);
    e.target.value = null;
  };

  render() {
    const { multiple, accept, label, labelStyle } = this.props;

    return (
      <React.Fragment>
        <label
          htmlFor={camelCase(label)}
          className={`${styles.fileLabel} button`}
        >
          {this.props.children || label}
        </label>
        <input
          type="file"
          id={camelCase(label)}
          className={styles.fileInput}
          multiple={multiple}
          accept={accept}
          onChange={this.onChange}
        />
      </React.Fragment>
    );
  }
}

FilePicker.propTypes = {
  multiple: PropTypes.bool,
  accept: PropTypes.string,
  label: PropTypes.string,
  labelStyle: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func
};

