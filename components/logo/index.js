import React from 'react';
import PropTypes from 'prop-types';
import styles from './logo.module.scss';
import theme from '@config/theme.config';

export function Logo(props) {
  return (
    <img
      src={props.src || theme.logo.url}
      style={{"height": props.height}}
      alt="Logo"
    />
  );
}

Logo.propTypes = {
  src: PropTypes.string,
  height: PropTypes.string
};

