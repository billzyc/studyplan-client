import React from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';

import styles from './CoursePlanner.module.scss';

import DnDBoard from '../DnDBoard/DnDBoard';
import DnDCard from '../DnDCard/DnDCard';

function CoursePlanner({}) {
  return (
    <section className={classnames(styles.coursePlanner)}>
      <div className={styles.boardContainer}>
        <DnDBoard id="board1">
          <DnDCard id="card1">
            <p>card 1</p>
          </DnDCard>
        </DnDBoard>

        <DnDBoard id="board2">
          <DnDCard id="card2">
            <p>card 2</p>
          </DnDCard>
        </DnDBoard>
      </div>
    </section>
  );
}

CoursePlanner.propTypes = checkProps({});

CoursePlanner.defaultProps = {};

export default CoursePlanner;
