import React from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';

import styles from './DnDCard.module.scss';

const DnDCard = ({ id, children }) => {
  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData('cardID', target.id);
  };

  const dragOver = e => {
    e.stopPropagation();
  };
  return (
    <div id={id} onDragStart={dragStart} onDragOver={dragOver} draggable="true" className={classnames(styles.card)}>
      {children}
    </div>
  );
};

DnDCard.propTypes = checkProps({});

DnDCard.defaultProps = {};

export default DnDCard;