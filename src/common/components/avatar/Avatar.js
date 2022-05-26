import PropTypes from 'prop-types';
import styles from './Avatar.module.scss';

import { getGravatarUrl } from '@utils/gravatar';

export function Avatar(props) {
  const { email, size, url, defaultImage } = props;

  const gravatarUrl = url || getGravatarUrl(email, size, defaultImage);

  const avatarStyle = size ? {
    height: `${size}px`,
    width: `${size}px`
  } : null;

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
  size: PropTypes.string,
  url: PropTypes.string,
  defaultImage: PropTypes.string
};

