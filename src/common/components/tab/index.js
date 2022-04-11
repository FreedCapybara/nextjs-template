import styled from 'styled-components';

export const TabBar = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumLightGrey};
`;

export const TabsWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 0 8px;
`;

export const tabStyle = (theme, selected) => `
  display: block;
  height: 36px;
  padding: 0 12px;
  text-decoration: none;
  color: ${theme.colors.textColor};
  border-bottom: ${selected ? '2px solid ' + theme.colors.blueGrey : '2px solid transparent'};
  cursor: pointer;

  ${!selected ? `
    &:hover {
      color: ${theme.colors.secondary};
    }
  ` : ''}
`;

export const Tab = styled.div`
  ${({ theme, selected }) => tabStyle(theme, selected)}
`;

export const TabLink = styled.a`
  ${({ theme, selected }) => tabStyle(theme, selected)}
`;

