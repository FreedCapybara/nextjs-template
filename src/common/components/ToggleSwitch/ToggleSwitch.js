import PropTypes from 'prop-types';
import styles from './ToggleSwitch.module.scss';

export function ToggleSwitch(props) {
  const { value, onChange } = props;

  function handleClick() {
    if (onChange) {
      onChange(!value);
    }
  };

  const switchBackgroundClass = value ?
    `${styles.switchBackground} ${styles.active}` :
    styles.switchBackground;

  const switchStyle = {
    transform: `translateX(${value ? '12px' : '-12px'})`
  };

  return (
    <div
      className={switchBackgroundClass}
      onClick={handleClick}
    >
      <div
        className={styles.switch}
        style={switchStyle}
      />
    </div>
  );
}

ToggleSwitch.propTypes = {
  value: PropTypes.bool,
  onClick: PropTypes.func
};

