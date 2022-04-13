import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.module.scss';

export function ProgressBar(props) {
  const { progress } = props;

  const progressStyle = {
    width: `calc(100% * ${progress})`
  };

  return (
    <div className={styles.progressBackground}>
      <div className={styles.progress} style={progressStyle} />
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number
};

