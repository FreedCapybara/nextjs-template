import PropTypes from 'prop-types';
import styles from './Form.module.scss';

export function Form(props) {
  const { onSubmit } = props;

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
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

