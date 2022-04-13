import React from 'react';
import PropTypes from 'prop-types';
import { isNumber } from 'lodash-es';
import styles from './Swatch.module.scss';

export function Swatch(props) {
  const { color } = props;

  const colorClass = styles[`color-${isNumber(color) ? (color % 5) : color}`];

  return (
    <div className={`${styles.colorSwatch} ${colorClass}`}>
      {props.children}
    </div>
  );
}

Swatch.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  children: PropTypes.node
};

