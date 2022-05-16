import React from 'react';
import PropTypes from 'prop-types';
import styles from './Toolbar.module.scss';

export function Toolbar(props) {
  return (
    <div className={styles.toolbar}>
      {props.children}
    </div>
  );
}

Toolbar.propTypes = {
};

