import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './BackButtonToolbar.module.scss';

import { FiArrowLeft } from 'react-icons/fi';
import { Toolbar } from '@components/Toolbar';
import { ToolbarGroup } from '@components/ToolbarGroup';

export function BackButtonToolbar(props) {
  const { backRoute, backText } = props;

  return (
    <div className={styles.toolbarWrapper}>
      <Toolbar>
        <ToolbarGroup>
          <Link href={backRoute || '/'}>
            <a className="icon-button">
              <FiArrowLeft />
              {!!backText && (
                <span>{backText}</span>
              )}
            </a>
          </Link>
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
}

BackButtonToolbar.propTypes = {
  backRoute: PropTypes.string,
  backText: PropTypes.string
};

