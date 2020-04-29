import React from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';

import styles from './CoursePlanner.module.scss';

function CoursePlanner({}) {
  return <p className={classnames(styles.coursePlanner)}>course planner</p>;
}

CoursePlanner.propTypes = checkProps({});

CoursePlanner.defaultProps = {};

export default CoursePlanner;
