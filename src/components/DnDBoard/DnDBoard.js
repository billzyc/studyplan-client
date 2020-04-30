import React from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';

import styles from './DnDBoard.module.scss';

const DnDBoard = props => {
  const drop = e => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('cardId');
    const card = document.getElementById(cardId);
    card.style.display = 'block';
    e.target.appendChild(card);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <div id={props.id} onDrop={drop} onDragOver={dragOver} className={classnames(styles.board)}>
      {props.children}
    </div>
  );
};

DnDBoard.propTypes = checkProps({});

DnDBoard.defaultProps = {};

export default DnDBoard;
