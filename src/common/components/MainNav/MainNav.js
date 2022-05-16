import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './MainNav.module.scss';

import theme from '@app/theme';

import { FiExternalLink } from 'react-icons/fi';
import { Toolbar } from '@components/Toolbar';
import { ToolbarGroup } from '@components/ToolbarGroup';
import { TabBar } from '@components/TabBar';
import { Tab } from '@components/Tab';
import { Logo } from '@components/Logo';
import { AvatarMenu } from '@components/AvatarMenu';

export function MainNav(props) {
  const { data: session } = useSession();

  const homeTabMatchPaths = [{
    path: '/',
    exact: true
  }, {
    path: '/home'
  }];

  return (
    <div className={styles.navWrapper}>
      <div className="container">
        <Toolbar>
          <ToolbarGroup>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
            <Link href="/">
              <a className={styles.appTitle}>
                {theme.appName}
              </a>
            </Link>
          </ToolbarGroup>

          <ToolbarGroup>
            <a
              className="text-button"
              href="https://github.com/FreedCapybara/nextjs-template"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <FiExternalLink />
            </a>
            {session ? (
              <>
              <AvatarMenu email={session.user.email} align="right">
                <Link href="/account">
                  <a>Account</a>
                </Link>
                <button onClick={signOut}>
                  Logout
                </button>
              </AvatarMenu>
              </>
            ) : (
              <>
              <button className="text-button" onClick={signIn}>
                Sign in
              </button>
              <Link href="/signup">
                <a className="button">
                  Sign up
                </a>
              </Link>
              </>
            )}
          </ToolbarGroup>
        </Toolbar>
      </div>

      <TabBar>
        <Tab path="/" matchPaths={homeTabMatchPaths}>
          Home
        </Tab>

        <Tab path="/sandbox">
          Sandbox
        </Tab>
      </TabBar>
    </div>
  );
}

MainNav.propTypes = {
};

