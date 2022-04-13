import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.scss';

import { getGravatarUrl } from '@utils/gravatar';

export function Avatar(props) {
  const { email, width, height, size, url } = props;

  const gravatarUrl = url || getGravatarUrl(email, size);

  const avatarStyle = {
    height: height || (size && `${size}px`),
    width: width || (size && `${size}px`)
  };

  return (
    <img
      className={styles.avatarImage}
      src={gravatarUrl}
      title={email}
      alt={`Avatar image for ${email}`}
      style={avatarStyle}
    />
  );
}

Avatar.propTypes = {
  email: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.string
};

