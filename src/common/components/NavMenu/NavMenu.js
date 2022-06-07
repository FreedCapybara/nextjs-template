import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './NavMenu.module.scss';

import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

export function NavMenu(props) {
  const { title, align, mode } = props;

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

  let menuButtonClass = styles.menuButton;
  let hamburgerButtonClass = styles.hamburgerButton;

  if (mode === 'hamburger') {
    menuButtonClass += ` ${styles.hamburgerOnly}`;
    hamburgerButtonClass += ` ${styles.hamburgerOnly}`;
  }

  if (mode === 'text') {
    menuButtonClass += ` ${styles.textOnly}`;
    hamburgerButtonClass += ` ${styles.textOnly}`;
  }

  if (isOpen) {
    menuButtonClass += ` ${styles.open}`;
    hamburgerButtonClass += ` ${styles.open}`;
  }

  return (
    <div className={styles.wrapper}>

      {/* desktop title */}
      <div className={menuButtonClass} onClick={openMenu}>
        <span className={styles.menuTitle}>
          {title || 'Menu'}
        </span>
        {isOpen ? (
          <FiChevronUp />
        ) : (
          <FiChevronDown />
        )}
      </div>

      {/* mobile hamburger */}
      <div className={hamburgerButtonClass} onClick={openMenu}>
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
  mode: PropTypes.string,
  children: PropTypes.node
};

