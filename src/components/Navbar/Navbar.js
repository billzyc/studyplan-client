import React from 'react';
import checkProps from '@jam3/react-check-extra-props';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Navbar.module.scss';

function Navbar({}) {
  return <section className={classnames(styles.navbar)}></section>;
}

Navbar.propTypes = checkProps({
  copy: PropTypes.object
});
export default Navbar;
