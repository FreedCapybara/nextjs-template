import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal.module.scss';

import { modalUtils } from '@common/utils/modal';

export function Modal(props) {

  function consumeEvent(e) {
    e.stopPropagation();
  }

  function close() {
    if (props.onClose) {
      props.onClose();
    }
    modalUtils.closeModal();
  };

  return (
    <div className={styles.wrapper} onClick={close}>
      <div className={styles.card} onClick={consumeEvent}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>
            {props.title}
          </span>

          <button className={styles.closeButton} type="button" onClick={close}>
            <span className="ti-close" />
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
  onClose: PropTypes.func
};

