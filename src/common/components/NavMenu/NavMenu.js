import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './NavMenu.module.scss';

export function NavMenu(props) {
  const { title, align } = props;

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
    display: isOpen ? 'flex' : 'none',
    right: align === 'right' ? '-1px' : 'auto'
  };

  const iconClass = isOpen ? 'ti-angle-up' : 'ti-angle-down';

  return (
    <div className={styles.wrapper}>

      {/* desktop title */}
      <div className={styles.menuButton} onClick={openMenu}>
        <span className={styles.menuTitle}>
          {title || 'Menu'}
        </span>
        <span className={`${styles.menuIcon} ${iconClass}`} />
      </div>

      {/* mobile hamburger */}
      <div className={styles.hamburgerButton} onClick={openMenu}>
        <div className={styles.hamburgerBar} />
        <div className={styles.hamburgerBar} />
        <div className={styles.hamburgerBar} />
      </div>

      {/* menu backdrop */}
      <div
        className={styles.menuBackground}
        style={menuBackgroundStyle}
        onClick={closeMenu}
      />

      {/* menu content */}
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

NavMenu.propTypes = {
  title: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node
};

