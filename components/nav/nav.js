import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { theme } from '@config/theme';
import { authActions } from '@redux/actions';
import { Avatar, Button, LinkButton, Logo } from '@components/elements';

import { Menu } from './menu';

/* istanbul ignore next */
const NavBar = styled.nav`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  box-shadow: ${({ theme }) => theme.shadows.boxShadowLarge};
  height: ${({ theme }) => theme.toolbar.mobileHeight};
  z-index: 2;

  @media(min-width: ${({ theme }) => theme.breakpoints.desktopBreakpointMin}) {
    height: ${({ theme }) => theme.toolbar.desktopHeight};
  }
`;

/* istanbul ignore next */
const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0 20px;

  @media(min-width: ${({ theme }) => theme.breakpoints.desktopBreakpointMin}) {
    padding: 0 40px;
  }
`;

/* istanbul ignore next */
const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

/* istanbul ignore next */
const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 13px;
  align-items: center;
  display: flex;
`;

/* istanbul ignore next */
const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

export class NavComponent extends React.Component {

  logout = () => {
    this.props.logout();
  };

  render() {
    const { user } = this.props;

    return (
      <NavBar>
        <NavItems>
          <NavItem>
            <Link href="/" passHref>
              <NavLink>
                <Logo height="42px" desktopHeight={theme.toolbar.mobileHeight} />
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <AvatarWrapper>
              <Avatar email={user.email} />
            </AvatarWrapper>
            <Menu title={user.email} align="right">
              <Link href="/account">
                <LinkButton>
                  Account
                </LinkButton>
              </Link>
              <Button onClick={this.logout}>
                Logout
              </Button>
            </Menu>
          </NavItem>
        </NavItems>
      </NavBar>
    );
  }
}

NavComponent.propTypes = {
  intl: PropTypes.object,
  user: PropTypes.object,
  organization: PropTypes.object,
  logout: PropTypes.func
};

/* istanbul ignore next */
const mapStateToProps = state => {
  return {
    ...state.authState,
    ...state.organizationState
  };
};

const mapDispatchToProps = {
  ...authActions
};

export const Nav = connect(mapStateToProps, mapDispatchToProps)(NavComponent);

