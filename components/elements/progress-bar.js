import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* istanbul ignore next */
const ProgressBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.mediumLightGrey};
  display: inline-block;
  border-radius: 20px;
  width: 100%;
  height: 12px;
  overflow: hidden;
`;

/* istanbul ignore next */
const Progress = styled.div`
  width: calc(100% * ${({ progress }) => progress});
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 20px;
`;

export class ProgressBar extends React.Component {
  render() {
    return (
      <ProgressBackground>
        <Progress progress={this.props.progress} />
      </ProgressBackground>
    );
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number
};

