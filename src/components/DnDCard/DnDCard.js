import React from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';
import { useCookies } from 'react-cookie';
import axios from 'axios';

import styles from './DnDCard.module.scss';

import { API_ROUTES, apiBaseUrl } from '../../data/consts';
import copy from '../../data/copy.json';
import { ReactComponent as DeleteSVG } from '../../assets/svgs/close.svg';
import { ReactComponent as BookSVG } from '../../assets/svgs/book.svg';

const DnDCard = ({ id, courseNumber, courseSubject, updateBoard, removeDraggedCard }) => {
  const [cookies] = useCookies(['token']);
  const deleteCourse = () => {
    axios({
      method: 'delete',
      headers: { authorization: cookies.token },
      url: `${API_ROUTES.COURSE_ITEMS}${id}`,
      baseURL: apiBaseUrl
    })
      .then((response) => {
        updateBoard();
      })
      .catch(function (error) {
        console.log(error);
        window.alert(copy.error.deleteCourse);
      });
  };

  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData('cardID', target.id);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  const dragEnd = (e) => {
    e.stopPropagation();
    if (e.dataTransfer.dropEffect === 'move') {
      removeDraggedCard(id);
    }
  };

  return (
    <div
      className={classnames(styles.card)}
      id={id}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onDragOver={dragOver}
      draggable="true"
    >
      <div className={classnames(styles.title)}>
        <BookSVG />
        <p>
          {courseSubject}-{courseNumber}
        </p>
      </div>

      <DeleteSVG onClick={deleteCourse} />
    </div>
  );
};

DnDCard.propTypes = checkProps({
  id: PropTypes.number.isRequired,
  children: PropTypes.object,
  updateBoard: PropTypes.func.isRequired,
  removeDraggedCard: PropTypes.func.isRequired
});

DnDCard.defaultProps = {};

export default DnDCard;
