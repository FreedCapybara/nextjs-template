import React from 'react';
import PropTypes from 'prop-types';
import styles from './emoji.module.scss';

export function Emoji(props) {
  return (
    <span className={styles.emojiText}>
      {props.children}
    </span>
  );
}

Emoji.propTypes = {
  children: PropTypes.node
};

