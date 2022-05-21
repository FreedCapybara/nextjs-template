import PropTypes from 'prop-types';
import styles from './LandingNav.module.scss';

import { MainToolbar } from '@components/MainToolbar';

export function LandingNav(props) {
  return (
    <div className={styles.navWrapper}>
      <MainToolbar />
    </div>
  );
}

LandingNav.propTypes = {
};

