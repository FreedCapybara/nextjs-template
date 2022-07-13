import PropTypes from 'prop-types';
import styles from './Logo.module.scss';

import theme from '@app/theme';

export function Logo(props) {
  const { size } = props;

  const logoStyle = size ? {
    height: size
  } : {};

  return (
    <img
      className={styles.logoImage}
      src={theme.logoUrl}
      style={logoStyle}
      alt="Logo"
    />
  );
}

Logo.propTypes = {
  size: PropTypes.string
};

