import React from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';
import { useCookies } from 'react-cookie';
import axios from 'axios';

import styles from './DnDCard.module.scss';

import { API_ROUTES, apiBaseUrl } from '../../data/consts';

const DnDCard = ({ id, children, updateBoard }) => {
  const [cookies] = useCookies(['token']);
  const deleteCourse = () => {
    axios({
      method: 'delete',
      headers: { authorization: cookies.token },
      url: `${API_ROUTES.COURSEITEMS}${id}`,
      baseURL: apiBaseUrl
    })
      .then(response => {
        updateBoard();
      })
      .catch(function(error) {
        console.log(error);
        window.alert('Delete course error, please try again');
      });
  };

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
      <button className={styles.delete} onClick={deleteCourse}>
        x
      </button>
    </div>
  );
};

DnDCard.propTypes = checkProps({});

DnDCard.defaultProps = {};

export default DnDCard;
