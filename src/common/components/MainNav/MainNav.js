import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './MainNav.module.scss';

import theme from '@app/theme';

import { MainToolbar } from '@components/MainToolbar';
import { TabBar } from '@components/TabBar';
import { Tab } from '@components/Tab';

export function MainNav(props) {

  const homeTabMatchPaths = [{
    path: '/',
    exact: true
  }, {
    path: '/home'
  }];

  return (
    <div className={styles.navWrapper}>
      <div className="container">
        <MainToolbar />
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

