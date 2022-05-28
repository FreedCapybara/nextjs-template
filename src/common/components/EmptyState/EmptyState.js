import PropTypes from 'prop-types';
import styles from './EmptyState.module.scss';

import theme from '@app/theme';

export function EmptyState(props) {

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.emptyStateImage}
        src={theme.emptyStateImageUrl}
        alt="Empty state image"
      />
      <em>{props.children}</em>
    </div>
  );
}

EmptyState.propTypes = {
  children: PropTypes.node
};

