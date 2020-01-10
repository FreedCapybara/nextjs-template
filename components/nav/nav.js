import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FormattedMessage, defineMessages } from 'react-intl';
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

const messages = defineMessages({
  homeLink: {
    id: 'nav.home',
    defaultMessage: 'Home',
    description: 'Home navigation link',
  }
});

export class Nav extends React.Component {

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <NavBar>
        <NavItems>
          <NavItem>
            <Link href="/" passHref>
              <NavLink>
                {formatMessage(messages.homeLink)}
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <NavLink href="https://zeit.co/now">
              <FormattedMessage id="nav.zeit" defaultMessage="ZEIT" description="Company navigation link" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/zeit/next.js">
              <FormattedMessage id="nav.github" defaultMessage="GitHub" description="GitHub navigation link" />
            </NavLink>
          </NavItem>
        </NavItems>
      </NavBar>
    );
  }
}

Nav.propTypes = {
  intl: PropTypes.object
};

