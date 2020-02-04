import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* istanbul ignore next */
const LogoImg = styled.img`
  ${({ height }) => height ? `height: ${height};` : ''}

  ${({ theme, desktopHeight }) => desktopHeight ? (
    `@media(min-width: ${theme.breakpoints.desktopBreakpointMin}) {
      height: ${desktopHeight};
    }`
  ) : ''}
`;

export class Logo extends React.Component {
  render() {
    return (
      <LogoImg
        src={this.props.src || 'https://via.placeholder.com/150'}
        height={this.props.height}
        desktopHeight={this.props.desktopHeight}
        alt="Logo"
      />
    );
  }
}

Logo.propTypes = {
  src: PropTypes.string,
  height: PropTypes.string,
  desktopHeight: PropTypes.string
};

