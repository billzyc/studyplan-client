import React from 'react';
import classnames from 'classnames';

import styles from './HamburgerButton.module.scss';

export const HamburgerButton = ({ isActive, setIsActive }) => {
  return (
    <button
      className={classnames(styles.hamburgerButton)}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <span
        className={classnames(styles.hamburgerLeft, styles.hamburgerLine, { [styles.hamburgerActive]: isActive })}
      ></span>
      <span
        className={classnames(styles.hamburgerMiddle, styles.hamburgerLine, { [styles.hamburgerActive]: isActive })}
      ></span>
      <span
        className={classnames(styles.hamburgerRight, styles.hamburgerLine, { [styles.hamburgerActive]: isActive })}
      ></span>
    </button>
  );
};

export default HamburgerButton;
