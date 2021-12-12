import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* istanbul ignore next */
const Wrapper = styled.div`
  position: relative;
`;

/* istanbul ignore next */
const MenuButton = styled.div`
  cursor: pointer;
  margin: -20px;
  padding: 20px;

  @media(max-width: calc(${({ theme }) => theme.breakpoints.desktopBreakpointMin} - 1px)) {
    display: none;
  }
`;

/* istanbul ignore next */
const MenuTitle = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textColorLight};
  margin-right: 12px;
`;

/* istanbul ignore next */
const MenuIcon = styled.span`
`;

/* istanbul ignore next */
const HamburgerButton = styled.div`
  cursor: pointer;
  margin: -20px;
  padding: 20px;

  @media(min-width: ${({ theme }) => theme.breakpoints.desktopBreakpointMin}) {
    display: none;
  }
`;

/* istanbul ignore next */
const HamburgerBar = styled.div`
  display: block;
  height: 2px;
  width: 20px;
  background: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 4px;
`;

/* istanbul ignore next */
const MenuBackground = styled.div`
  position: fixed;
  z-index: 199;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
`;

/* istanbul ignore next */
const MenuContent = styled.div`
  position: absolute;
  ${({ align }) => align === 'right' ? 'right: -1px;' : ''}
  transform: translateY(-32px);
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowMedium};
  border-radius: 12px;
  min-width: 150px;
  z-index: 200;
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  flex-direction: column;

  a,
  button,
  .button {
    border: none;
    text-align: left;
    color: ${({ theme }) => theme.colors.textColorLight};
    font-weight: 700;
    font-size: 1.125rem;
    letter-spacing: .8px;
    padding: 8px 24px;
    text-decoration: none;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    margin: 0 4px;

    &:first-child {
      margin-top: 16px;
    }

    &:last-child {
      margin-bottom: 16px;
    }

    &:not(:last-child) {
      margin-bottom: 4px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      box-shadow: ${({ theme }) => theme.shadows.boxShadowMedium};
    }
  }

  @media(min-width: ${({ theme }) => theme.breakpoints.desktopBreakpointMin}) {
    transform: translateY(8px);
  }
`;

export class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  openMenu = () => {
    this.setState({
      isOpen: true
    });
  };

  closeMenu = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <Wrapper>
        <MenuButton className="hamburger-menu" onClick={this.openMenu}>
          <MenuTitle>{this.props.title || 'Menu'}</MenuTitle>
          <MenuIcon className={(this.state.isOpen ? 'ti-angle-up' : 'ti-angle-down')} />
        </MenuButton>
        {this.props.mobileButton ? this.props.mobileButton : (
          <HamburgerButton onClick={this.openMenu}>
            <HamburgerBar />
            <HamburgerBar />
            <HamburgerBar />
          </HamburgerButton>
        )}
        <MenuBackground isOpen={this.state.isOpen} onClick={this.closeMenu} />
        <MenuContent isOpen={this.state.isOpen} onClick={this.closeMenu} align={this.props.align}>
          {this.props.children}
        </MenuContent>
      </Wrapper>
    );
  }
}

Menu.propTypes = {
  title: PropTypes.string,
  align: PropTypes.string,
  mobileButton: PropTypes.node,
  children: PropTypes.node
};

