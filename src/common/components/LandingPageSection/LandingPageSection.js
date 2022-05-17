import React from 'react';
import PropTypes from 'prop-types';
import styles from './LandingPageSection.module.scss';

export function LandingPageSection(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

LandingPageSection.propTypes = {
};

