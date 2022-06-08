import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

import { modalUtils } from '@utils/modal';

import { FiX } from 'react-icons/fi';

export function Modal(props) {
  const { title, onClose } = props;

  function consumeEvent(e) {
    e.stopPropagation();
  }

  function close() {
    if (onClose) {
      onClose();
    }
    modalUtils.closeModal();
  };

  return (
    <div className={styles.wrapper} onClick={close}>
      <div className={styles.card} onClick={consumeEvent}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>
            {title}
          </span>

          <button className={styles.closeButton} type="button" onClick={close}>
            <FiX />
          </button>
        </div>

        <div className={styles.cardContent}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node
};

