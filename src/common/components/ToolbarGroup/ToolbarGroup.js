import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToolbarGroup.module.scss';

export function ToolbarGroup(props) {
  return (
    <div className={styles.toolbarGroup}>
      {props.children}
    </div>
  );
}

ToolbarGroup.propTypes = {
};

