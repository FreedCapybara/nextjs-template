import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DeleteButton.module.scss';

export function DeleteButton(props) {
  const { onDelete, buttonClass } = props;

  const clicksRequired = 5;

  const [clicksRemaining, setClicksRemaining] = useState(clicksRequired);

  function onClick() {
    if (clicksRemaining <= 1) {
      setClicksRemaining(clicksRequired);
      if (onDelete) {
        onDelete();
      }
    } else {
      setClicksRemaining(clicksRemaining - 1);
    }
  }

  return (
    <div className={styles.wrapper}>
      <button className={`${styles.deleteButton} ${buttonClass || 'button'}`} type="button" onClick={onClick}>
        <span className="ti-trash" />
        {clicksRemaining === clicksRequired ? (
          <span>Delete</span>
        ) : (
          <span>Are you sure? ({clicksRemaining})</span>
        )}
      </button>
    </div>
  );
}

DeleteButton.propTypes = {
  onDelete: PropTypes.func,
  buttonClass: PropTypes.string
};

