import React from 'react';
import PropTypes from 'prop-types';
import styles from './form.module.scss';

export function Form(props) {
  const { onSubmit } = props;

  return (
    <form
      className={styles.form}
      onSubmit={onSubmit}
      autoComplete="off"
    >
      {props.children}
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node
};

