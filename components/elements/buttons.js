import styled from 'styled-components';

import { theme } from '@config/theme';

/* istanbul ignore next */
const style = `
  display: inline-block;
  background: transparent;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  padding: 12px 64px;
  font-size: 1.125rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: .5px;
  text-align: center;
  vertical-align: middle;
  border-radius: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color .3s, color .3s, box-shadow .3s;

  &:hover {
    background-color: ${theme.colors.primary};
    color: white;
    box-shadow: ${theme.shadows.boxShadowLarge};
  }

  &[disabled] {
    border-color: ${theme.colors.grey} !important;
    color: ${theme.colors.grey} !important;
    background: transparent !important;
    cursor: default !important;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  ${style}
`;

export const LinkButton = styled.a`
  ${style}
`;

