import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './modal.module.scss';

import { appActions } from '@redux/actions';

export class ModalComponent extends React.Component {

  consumeEvent(e) {
    e.stopPropagation();
  }

  cancel = () => {
    this.props.hideModal();
  };

  render() {
    return (
      <div className={styles.wrapper} onClick={this.cancel}>
        <div className={styles.card} onClick={this.consumeEvent}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>
              {this.props.modalTitle}
            </span>

            <button className={styles.closeButton} type="button" onClick={this.cancel}>
              <span className="ti-close" />
            </button>
          </div>

          <div className={styles.cardContent}>
            {this.props.modalContent}
          </div>
        </div>
      </div>
    );
  }
}

ModalComponent.propTypes = {
  modalTitle: PropTypes.string,
  modalContent: PropTypes.node,
  hideModal: PropTypes.func
};

/* istanbul ignore next */
const mapStateToProps = state => {
  return {
    ...state.appState
  };
};

const mapDispatchToProps = {
  ...appActions
};

export const Modal = connect(mapStateToProps, mapDispatchToProps)(ModalComponent);

