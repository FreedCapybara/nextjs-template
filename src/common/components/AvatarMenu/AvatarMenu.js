import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AvatarMenu.module.scss';

import { Avatar } from '@components/Avatar';

export function AvatarMenu(props) {
  const { email, align } = props;

  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(true);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  const menuBackgroundStyle = {
    display: isOpen ? 'flex' : 'none'
  };

  const menuContentStyle = {
    right: align === 'right' ? '-1px' : 'auto',
    display: isOpen ? 'flex' : 'none'
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatarWrapper} onClick={openMenu}>
        <Avatar email={email} />
      </div>

      <div
        className={styles.menuBackground}
        style={menuBackgroundStyle}
        onClick={closeMenu}
      />

    <div
      className={styles.menuContent}
      style={menuContentStyle}
      onClick={closeMenu}
    >
      {props.children}
    </div>
  </div>
  );
}

AvatarMenu.propTypes = {
  email: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node
};

