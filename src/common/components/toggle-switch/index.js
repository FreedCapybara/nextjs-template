import React from 'react';
import PropTypes from 'prop-types';
import styles from './toggle-switch.module.scss';

export function ToggleSwitch(props) {
  const { value, onChange } = props;

  function handleClick() {
    if (onChange) {
      onChange(!value);
    }
  };

  const switchBackgroundStyle = {
    backgroundColor: value ? null : 'transparent'
  };

  const switchStyle = {
    backgroundColor: value ? 'white' : null,
    transform: `translateX(${value ? '12px' : '-12px'})`
  };

  return (
    <div
      className={styles.switchBackground}
      style={switchBackgroundStyle}
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

