import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

/* istanbul ignore next */
const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

/* istanbul ignore next */
const scaleIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

/* istanbul ignore next */
const Spinner = styled.div`
  font-size: 10px;
  width: 20px;
  height: 20px;
  text-indent: -9999em;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  background: -moz-linear-gradient(left, ${({ theme }) => theme.colors.primary} 10%, rgba(255, 255, 255, 0) 42%);
  background: -webkit-linear-gradient(left, ${({ theme }) => theme.colors.primary} 10%, rgba(255, 255, 255, 0) 42%);
  background: -o-linear-gradient(left, ${({ theme }) => theme.colors.primary} 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(left, ${({ theme }) => theme.colors.primary} 10%, rgba(255, 255, 255, 0) 42%);
  background: linear-gradient(to right, ${({ theme }) => theme.colors.primary} 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  &:after {
    background: white;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  -webkit-animation: ${scaleIn} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both, ${rotate} 0.6s linear infinite both;
  animation: ${scaleIn} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both, ${rotate} 0.6s linear infinite both;

  @media(min-width: ${({ theme }) => theme.breakpoints.desktopBreakpointMin}) {
    width: 28px;
    height: 28px;

    ${({ size }) => size != null ? `width: ${size}px` : null};
    ${({ size }) => size != null ? `height: ${size}px` : null};
  }

  ${({ size }) => size != null ? `width: ${size}px` : null};
  ${({ size }) => size != null ? `height: ${size}px` : null};
`;

export class LoadingSpinner extends React.Component {
  render() {
    return (
      <Spinner size={this.props.size} />
    );
  }
}

LoadingSpinner.propTypes = {
  size: PropTypes.number
};

