import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './Nav.module.scss';

import { Toolbar } from '@components/Toolbar';
import { ToolbarGroup } from '@components/ToolbarGroup';
import { TabBar } from '@components/TabBar';
import { Logo } from '@components/Logo';
import { AvatarMenu } from '@components/AvatarMenu';

export function Nav(props) {
  const { data: session } = useSession();

  return (
    <div className={styles.navWrapper}>
      <Toolbar>
        <ToolbarGroup>
          <Logo />
        </ToolbarGroup>

        <ToolbarGroup>
            {session ? (
              <AvatarMenu email={session.user.email} align="right">
                <Link href="/account">
                  <a>Account</a>
                </Link>
                <button onClick={signOut}>
                  Logout
                </button>
              </AvatarMenu>
            ) : (
              <button onClick={signIn}>
                Sign in
              </button>
            )}
        </ToolbarGroup>
      </Toolbar>

      <TabBar>
      </TabBar>
    </div>
  );
}

Nav.propTypes = {
};

