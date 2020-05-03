import React from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import styles from './DnDBoard.module.scss';

import { APIROUTES, apiBaseUrl } from '../../data/consts';
import { replaceSemester } from '../../redux/modules/semester';

export const DnDBoardType = {
  UNASSIGNED: 'unassigned',
  ASSIGNED: 'assigned'
};

const DnDBoard = ({ id, children, semester, styleClass = DnDBoard.ASSIGNED }) => {
  const [cookies] = useCookies(['token']);
  const dispatch = useDispatch();
  const { courseInfo } = useSelector(state => state);

  const deleteBoard = () => {
    axios({
      method: 'delete',
      headers: { authorization: cookies.token },
      url: `${APIROUTES.SEMESTERS}${id}`,
      baseURL: apiBaseUrl
    })
      .then(response => {
        axios({
          method: 'get',
          headers: { authorization: cookies.token },
          url: APIROUTES.SEMESTERS,
          baseURL: apiBaseUrl
        })
          .then(response => {
            const data = response.data;
            dispatch(replaceSemester(data));
          })
          .catch(function(error) {
            window.alert('Server 1 error, please try again');
          });
      })
      .catch(function(error) {
        window.alert('Server error, please try again');
      });
  };

  const updateCardPlacement = cardId => {
    const semesterId = id;
    const currentCourse = courseInfo.find(course => course.id === parseInt(cardId));
    const { course_number, course_subject } = currentCourse;
    axios({
      method: 'put',
      headers: { authorization: cookies.token },
      data: { course_subject: course_subject, course_number: course_number, semester_placement: semesterId },
      url: `${APIROUTES.COURSEITEMS}${cardId}/`,
      baseURL: apiBaseUrl
    })
      .then(response => {
        console.log(response);
      })
      .catch(function(error) {
        window.alert('Server error, please try again');
      });
  };

  const drop = e => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('cardId');
    const card = document.getElementById(cardId);
    card.style.display = 'block';
    e.target.appendChild(card);
    updateCardPlacement(cardId);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <div id={id} onDrop={drop} onDragOver={dragOver} className={classnames(styles[styleClass])}>
      {semester && <p>{semester}</p>}
      {children}
      <button onClick={deleteBoard} className={styles.delete}>
        delete
      </button>
    </div>
  );
};

DnDBoard.propTypes = checkProps({});

DnDBoard.defaultProps = {};

export default DnDBoard;
