import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { appActions } from '@redux/actions';

/* istanbul ignore next */
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, .3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* istanbul ignore next */
const Card = styled.div`
  position: relative;
  background-color: white;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowMedium};
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  height: 80vh;
  margin: 20px;
  transition: box-shadow .3s;
  z-index: 51;
`;

/* istanbul ignore next */
const CloseButton = styled.button`
  position: absolute;
  font-size: 1.5rem;
  padding: 0;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.textColorLight};
  font-weight: normal;
  letter-spacing: 0;
  top: 20px;
  right: 20px;

  &:hover {
    background: none;
    color: ${({ theme }) => theme.colors.textColorLight};
    box-shadow: none;
  }
`;

/* istanbul ignore next */
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px 10px;
  margin: 0 -20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumLightGrey};
`;

/* istanbul ignore next */
const CardTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`;

/* istanbul ignore next */
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 20px;
  margin: 0 -20px;
  max-height: 100%;
`;

export class ModalComponent extends React.Component {

  consumeEvent(e) {
    e.stopPropagation();
  }

  cancel = () => {
    this.props.hideModal();
  };

  render() {
    return (
      <Wrapper onClick={this.cancel}>
        <Card onClick={this.consumeEvent}>
          <CardHeader>
            <CardTitle>
              {this.props.modalTitle}
            </CardTitle>

            <CloseButton type="button" onClick={this.cancel}>
              <span className="ti-close" />
            </CloseButton>
          </CardHeader>

          <CardContent>
            {this.props.modalContent}
          </CardContent>
        </Card>
      </Wrapper>
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

