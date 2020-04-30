import React from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';

import styles from './DnDBoard.module.scss';

export const DnDBoardType = {
  UNASSIGNED: 'unassigned',
  ASSIGNED: 'assigned'
};

const DnDBoard = ({ id, children, styleClass = DnDBoard.ASSIGNED }) => {
  const drop = e => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('cardId');
    const card = document.getElementById(cardId);
    card.style.display = 'block';
    console.log(card);
    e.target.appendChild(card);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <div id={id} onDrop={drop} onDragOver={dragOver} className={classnames(styles[styleClass])}>
      {children}
    </div>
  );
};

DnDBoard.propTypes = checkProps({});

DnDBoard.defaultProps = {};

export default DnDBoard;
