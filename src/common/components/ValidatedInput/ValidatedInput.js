import React from 'react';
import PropTypes from 'prop-types';
import styles from './ValidatedInput.module.scss';

export function ValidatedInput(props) {
  const {
    type,
    value,
    isValid,
    showSuccess,
    id,
    name,
    required,
    maxLength,
    iconOffset,
    onChange
  } = props;

  function handleChange(e) {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const indicatorIconStyle = {
    right: iconOffset || '12px'
  };

  const showValid = !!value && isValid && showSuccess;
  const showInvalid = !!value && !isValid;

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.validatedInput}
          type={type || 'text'}
          id={id}
          name={name}
          required={required}
          maxLength={maxLength}
          autoComplete="new-password"
          onChange={handleChange}
          value={value}
        />

        {showValid && (
          <span
            className={`${styles.indicatorIcon} ${styles.valid} ti-check`}
            style={indicatorIconStyle}
          >
            valid
          </span>
        )}
      </div>

      {showInvalid && (
        <span
          className={`${styles.indicatorIcon} ${styles.invalid} ti-alert`}
          style={indicatorIconStyle}
        >
          invalid
        </span>
      )}
    </div>
  );
}

ValidatedInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  isValid: PropTypes.bool,
  showSuccess: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  maxLength: PropTypes.string,
  onChange: PropTypes.func,
  iconOffset: PropTypes.string
};

