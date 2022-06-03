import PropTypes from 'prop-types';
import { upperFirst, camelCase } from 'lodash-es';
import styles from './FormField.module.scss';

export function FormField(props) {
  const { label, required, optional } = props;

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={camelCase(label)}>
        {upperFirst(label)}
        {required && (
          <span className={styles.requiredAsterisk}>
            *
          </span>
        )}
        {(optional && !required) && (
          <>
          &nbsp;
          <small>
            (optional)
          </small>
          </>
        )}
      </label>

      <div className={styles.contentWrapper}>
        {props.children}
      </div>
    </div>
  );
}

FormField.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  optional: PropTypes.bool,
  children: PropTypes.node
};

