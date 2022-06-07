import PropTypes from 'prop-types';
import styles from './ValidatedInput.module.scss';

import { FiCheck, FiAlertTriangle } from 'react-icons/fi';

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
    right: iconOffset || '1rem'
  };

  const showValid = !!value && isValid && showSuccess;
  const showInvalid = !!value && !isValid;

  return (
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
        <FiCheck
          className={`${styles.indicatorIcon} ${styles.valid}`}
          style={indicatorIconStyle}
        />
      )}

      {showInvalid && (
        <FiAlertTriangle
          className={`${styles.indicatorIcon} ${styles.invalid}`}
          style={indicatorIconStyle}
        />
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

