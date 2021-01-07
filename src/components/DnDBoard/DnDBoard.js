import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import styles from './DnDBoard.module.scss';

import { API_ROUTES, apiBaseUrl } from '../../data/consts';
import { replaceSemester } from '../../redux/modules/semester';
import DnDCard from '../DnDCard/DnDCard';
import copy from '../../data/copy.json';

import deleteSVG from '../../assets/svgs/delete.svg';
import addSVG from '../../assets/svgs/add.svg';

export const DnDBoardType = {
  UNASSIGNED: 'unassigned',
  ASSIGNED: 'assigned'
};

const DnDBoard = forwardRef(({ id, semester, styleClass, setIsCourseModel }, ref) => {
  const semesterId = id;
  const [currentSemesterCourses, setCurrentSemesterCourses] = useState([]);
  const [cookies] = useCookies(['token']);
  const dispatch = useDispatch();
  const { courseInfo } = useSelector(state => state);

  const deleteBoard = () => {
    axios({
      method: 'delete',
      headers: { authorization: cookies.token },
      url: `${API_ROUTES.SEMESTERS}${id}`,
      baseURL: apiBaseUrl
    })
      .then(response => {
        axios({
          method: 'get',
          headers: { authorization: cookies.token },
          url: API_ROUTES.SEMESTERS,
          baseURL: apiBaseUrl
        })
          .then(response => {
            const data = response.data;
            dispatch(replaceSemester(data));
          })
          .catch(function(error) {
            console.log(error);
            window.alert(copy.error.updateSemester);
          });
      })
      .catch(function(error) {
        console.log(error);
        window.alert(copy.error.deleteSemester);
      });
  };

  const fetchCurrentSemesterCourses = () => {
    axios({
      method: 'get',
      headers: { authorization: cookies.token },
      url: API_ROUTES.COURSE_ITEMS,
      params: { semester_query: semesterId },
      baseURL: apiBaseUrl
    })
      .then(response => {
        const data = response.data;
        setCurrentSemesterCourses(data);
      })
      .catch(function(error) {
        console.log(error);
        window.alert(copy.error.fetchCourse);
      });
  };

  const updateCardPlacement = (cardId, card) => {
    const currentCourse = courseInfo.find(course => course.id === parseInt(cardId));
    const { course_number, course_subject } = currentCourse;
    setCurrentSemesterCourses([...currentSemesterCourses, currentCourse]);
    axios({
      method: 'put',
      headers: { authorization: cookies.token },
      data: {
        course_subject: course_subject,
        course_number: course_number,
        semester_placement: semesterId === 'unassigned' ? null : semesterId
      },
      url: `${API_ROUTES.COURSE_ITEMS}${cardId}/`,
      baseURL: apiBaseUrl
    })
      .then(response => {
        fetchCurrentSemesterCourses();
      })
      .catch(function(error) {
        console.log(error);
        window.alert(copy.error.updateCourse);
      });
  };

  const drop = e => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('cardId');
    updateCardPlacement(cardId);
  };

  const dragOver = e => {
    e.preventDefault();
  };

  const removeDraggedCard = removedCourseID => {
    const filteredCourseList = currentSemesterCourses.filter(course => course.id !== removedCourseID);
    setCurrentSemesterCourses(filteredCourseList);
  };

  const renderCourseCards = () => {
    if (currentSemesterCourses.length > 0) {
      return currentSemesterCourses.map(course => {
        return (
          <DnDCard
            id={course.id}
            key={course.id}
            updateBoard={fetchCurrentSemesterCourses}
            removeDraggedCard={removeDraggedCard}
            courseSubject={course.course_subject}
            courseNumber={course.course_number}
          />
        );
      });
    }
  };

  useImperativeHandle(ref, () => ({
    updateCourses: fetchCurrentSemesterCourses
  }));

  useEffect(() => {
    fetchCurrentSemesterCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id={id}
      onDrop={drop}
      onDragOver={dragOver}
      className={styles.boardContainer}
      className={classnames(styles[styleClass])}
    >
      <div className={styles.semesterHeaders}>
        {semesterId !== DnDBoardType.UNASSIGNED ? (
          <p className={styles.semesterTitle}>{semester}</p>
        ) : (
          <p className={styles.semesterTitle}>Courses to complete</p>
        )}

        {semesterId === DnDBoardType.UNASSIGNED ? (
          <img
            src={addSVG}
            alt="add"
            onClick={() => {
              setIsCourseModel(true);
            }}
          />
        ) : (
          <img src={deleteSVG} alt="delete" onClick={deleteBoard} className={styles.delete} />
        )}
      </div>
      <div className={styles.tileContainer}>
        <React.Fragment>{renderCourseCards()}</React.Fragment>
      </div>
    </div>
  );
});

DnDBoard.propTypes = checkProps({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  semester: PropTypes.string,
  styleClass: PropTypes.string
});

DnDBoard.defaultProps = {
  styleClass: DnDBoard.ASSIGNED
};

export default DnDBoard;
