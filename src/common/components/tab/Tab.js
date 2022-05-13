import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { some } from 'lodash-es';
import styles from './Tab.module.scss';

export function Tab(props) {
  const { path, matchPaths, exactMatch } = props;
  const router = useRouter();

  function isPathMatch(path, exact) {
    return exact ?
      router.asPath === path :
      router.asPath.startsWith(path);
  }

  const isSelected =
    some(matchPaths, ({ path, exact }) => isPathMatch(path, exact)) ||
    isPathMatch(path, exactMatch);

  const tabClass = isSelected ?
    `${styles.tab} ${styles.selected}` :
    styles.tab;

  return (
    <Link href={path}>
      <a className={tabClass}>
        {props.children}
      </a>
    </Link>
  );
}

Tab.propTypes = {
  path: PropTypes.string,
  matchPaths: PropTypes.array,
  exactMatch: PropTypes.bool,
  children: PropTypes.node
};

