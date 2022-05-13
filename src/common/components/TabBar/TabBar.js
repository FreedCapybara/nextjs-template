import React from 'react';
import PropTypes from 'prop-types';
import styles from './TabBar.module.scss';

export function TabBar(props) {
  return (
    <div className={styles.tabBar}>
      <div className={styles.tabsWrapper}>
        {props.children}
      </div>
    </div>
  );
}

TabBar.propTypes = {
  children: PropTypes.node
};

