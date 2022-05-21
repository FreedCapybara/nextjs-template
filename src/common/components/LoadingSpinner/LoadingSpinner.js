import PropTypes from 'prop-types';
import styles from './LoadingSpinner.module.scss';

export function LoadingSpinner(props) {
  const { size, shadow } = props;

  const wrapperClass = shadow ?
    `${styles.wrapper} ${styles.shadow}` :
    styles.wrapper;

  const spinnerStyle = {
    width: size,
    height: size
  };

  return (
    <div className={wrapperClass}>
      <div
        className={styles.spinner}
        style={spinnerStyle}
      />
    </div>
  );
}

LoadingSpinner.propTypes = {
  size: PropTypes.number,
  shadow: PropTypes.bool
};

