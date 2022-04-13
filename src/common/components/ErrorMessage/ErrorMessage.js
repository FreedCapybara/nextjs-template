import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorMessage.module.scss';

export function ErrorMessage(props) {
  const { text } = props;

  return (
    <p className={styles.errorMessage}>
      {text || props.children}
    </p>
  );
}

ErrorMessage.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
};

