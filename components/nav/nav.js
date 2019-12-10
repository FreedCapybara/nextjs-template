import React from 'react';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavBar = styled.nav`
  text-align: center;
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 4px 16px;
`;

const NavItem = styled.li`
  display: flex;
  padding: 6px 8px;
`;

/* istanbul ignore next */
const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 13px;
`;

export class Nav extends React.Component {
  render() {
    return (
      <NavBar>
        <NavItems>
          <NavItem>
            <Link href="/" passHref>
              <NavLink>
                <FormattedMessage id="nav-home" defaultMessage="Home" description="Home navigation link" />
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <NavLink href="https://zeit.co/now">
              <FormattedMessage id="nav-zeit" defaultMessage="ZEIT" description="Company navigation link" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/zeit/next.js">
              <FormattedMessage id="nav-github" defaultMessage="GitHub" description="GitHub navigation link" />
            </NavLink>
          </NavItem>
        </NavItems>

        <style jsx>{`
          :global(body) {
          }
        `}</style>
      </NavBar>
    );
  }
}

Nav.propTypes = {
  title: PropTypes.string
};

