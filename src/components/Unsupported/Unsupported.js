import React, { memo } from 'react';
import classnames from 'classnames';

import styles from './Unsupported.module.scss';
import { ReactComponent as LaptopSVG } from '../../assets/svgs/laptop.svg';

function Unsupported() {
  return (
    <section className={classnames(styles.Unsupported)}>
      <h1>Device not supported</h1>
      <LaptopSVG className={classnames(styles.laptopSVG)} />
      <h4>Study Plan does not currently support mobile view, please try again with a desktop or laptop device!</h4>
    </section>
  );
}

export default memo(Unsupported);
