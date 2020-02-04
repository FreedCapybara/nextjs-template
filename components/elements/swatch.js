import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme } from '@config/theme';

const colors = [
  theme.colors.grey,
  theme.colors.green,
  theme.colors.purple,
  theme.colors.blue,
  theme.colors.tan
];

/* istanbul ignore next */
const ColorSwatch = styled.span`
  background-color: ${({ color }) => colors[color % colors.length]};
  padding: 2px 8px;
  display: inline-block;
  border-radius: 4px;
  text-transform: uppercase;
  color: white;
  font-weight: 700;
  font-size: .75rem;
`;

export class Swatch extends React.Component {
  render() {
    return (
      <ColorSwatch color={this.props.color}>
        {this.props.children}
      </ColorSwatch>
    );
  }
}

Swatch.propTypes = {
  index: PropTypes.number,
  color: PropTypes.number,
  children: PropTypes.node
};

