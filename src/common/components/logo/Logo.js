import PropTypes from 'prop-types';
import styles from './Logo.module.scss';

import theme from '@app/theme';

export function Logo(props) {
  const { height } = props;

  const logoStyle = {
    height
  };

  return (
    <img
      className={styles.logoImage}
      src={props.src || theme.logoUrl}
      style={logoStyle}
      alt="Logo"
    />
  );
}

Logo.propTypes = {
  src: PropTypes.string,
  height: PropTypes.string
};

