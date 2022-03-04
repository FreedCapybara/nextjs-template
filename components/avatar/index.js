import React from 'react';
import PropTypes from 'prop-types';

import { gravatarUrl } from '@lib/gravatar';

function Avatar {
  const { email, width, height, size, url } = this.props;

  const gravatarUrl = url || gravatarUrl(email, size);

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

export Avatar;

