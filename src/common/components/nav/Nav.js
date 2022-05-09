import React from 'react';
import PropTypes from 'prop-types';
import styles from './Nav.module.scss';

import { Toolbar } from '@components/Toolbar';
import { TabBar } from '@components/TabBar';

export function Nav(props) {

  return (
    <div className={styles.navWrapper}>
      <Toolbar>
      </Toolbar>

      <TabBar>
      </TabBar>
    </div>
  );
}

Nav.propTypes = {
};

