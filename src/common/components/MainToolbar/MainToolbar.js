import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './MainToolbar.module.scss';

import theme from '@app/theme';

import { FiExternalLink } from 'react-icons/fi';
import { Toolbar } from '@components/Toolbar';
import { ToolbarGroup } from '@components/ToolbarGroup';
import { Logo } from '@components/Logo';
import { AvatarMenu } from '@components/AvatarMenu';
import { NavMenu } from '@components/NavMenu';

export function MainToolbar() {
  const { data: session } = useSession();

  /*
   * Group nav links into mini components for re-use between the mobile and desktop layouts.
   * They don't seem quite large or separate enough to warrant their own files,
   * but they help avoid duplicate code and don't impact readability or maintainability too much.
   */

  const NavLinks = () => (
    <>
    <Link href="/demo/components">
      <a className="text-button">
        Components
      </a>
    </Link>

    <Link href="/demo/pages">
      <a className="text-button">
        Pages
      </a>
    </Link>

    <a
      className="text-button"
      href="https://github.com/FreedCapybara/nextjs-template"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub <FiExternalLink />
    </a>
    </>
  );

  const AccountActions = () => (
    <>
    <Link href="/account">
      <a>Account</a>
    </Link>

    <button onClick={signOut}>
      Logout
    </button>
    </>
  );

  const SignInButtons = () => (
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
  );

  return (
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

      {/* mobile */}
      <div className="hide-above-desktop">
        {session ? (
          <AvatarMenu email={session.user.email} align="right">
            <NavLinks />
            <AccountActions />
          </AvatarMenu>
        ) : (
          <NavMenu align="right">
            <NavLinks />
            <SignInButtons />
          </NavMenu>
        )}
      </div>

      {/* desktop */}
      <div className="hide-below-desktop">
        <ToolbarGroup>
          <NavLinks />
          {session ? (
            <AvatarMenu email={session.user.email} align="right">
              <AccountActions />
            </AvatarMenu>
          ) : (
            <SignInButtons />
          )}
        </ToolbarGroup>
      </div>
    </Toolbar>
  );
}

MainToolbar.propTypes = {
};

