import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.scss';

export function Hero(props) {
  return (
    <div className={styles.hero}>
      {props.children}
    </div>
  );
}

Hero.propTypes = {
};

