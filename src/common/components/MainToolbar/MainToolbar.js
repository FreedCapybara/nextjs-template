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

export function MainToolbar() {
  const { data: session } = useSession();

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

      <ToolbarGroup>
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
  );
}

MainToolbar.propTypes = {
};

