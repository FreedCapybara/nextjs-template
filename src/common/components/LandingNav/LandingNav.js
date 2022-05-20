import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import styles from './LandingNav.module.scss';

import theme from '@app/theme';

import { FiExternalLink } from 'react-icons/fi';
import { Toolbar } from '@components/Toolbar';
import { ToolbarGroup } from '@components/ToolbarGroup';
import { TabBar } from '@components/TabBar';
import { Logo } from '@components/Logo';

export function LandingNav(props) {
  return (
    <div className={styles.navWrapper}>
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
          <button className="text-button" onClick={signIn}>
            Sign in
          </button>
          <Link href="/signup">
            <a className="button">
              Sign up
            </a>
          </Link>
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
}

LandingNav.propTypes = {
};

