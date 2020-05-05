import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import styles from './CoursePlanner.module.scss';

import DnDBoard, { DnDBoardType } from '../DnDBoard/DnDBoard';
import { API_ROUTES, apiBaseUrl } from '../../data/consts';
import { replaceSemester } from '../../redux/modules/semester';
import { replaceCourse } from '../../redux/modules/course';
import { openModal, closeModal } from '../../redux/modules/modal';
import { MODAL_KEYS } from '../../data/consts';
import copy from '../../data/copy.json';

function CoursePlanner() {
  const unassignedBoardRef = useRef();
  const [newCourseSubject, setNewCourseSubject] = useState('');
  const [newCourseNumber, setNewCourseNumber] = useState('');
  const [cookies] = useCookies(['token']);
  const dispatch = useDispatch();
  const { semesterInfo, courseInfo } = useSelector(state => state);

  const handleModalPortal = useCallback(() => {
    if (Object.keys(semesterInfo).length === 0) {
      dispatch(openModal(MODAL_KEYS.NEW_SEMESTER));
    } else {
      dispatch(closeModal());
    }
  }, [dispatch, semesterInfo]);

  const fetchSavedSemesters = useCallback(() => {
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
        window.alert(copy.error.fetchSemester);
      });
  }, [cookies.token, dispatch]);

  const fetchAllCourses = useCallback(() => {
    axios({
      method: 'get',
      headers: { authorization: cookies.token },
      url: API_ROUTES.COURSEITEMS,
      baseURL: apiBaseUrl
    })
      .then(response => {
        const data = response.data;
        dispatch(replaceCourse(data));
      })
      .catch(function(error) {
        console.log(error);
        window.alert(copy.error.fetchCourses);
      });
  }, [cookies.token, dispatch]);

  const handleNewCourseSubject = e => {
    setNewCourseSubject(e.currentTarget.value);
  };

  const handleNewCourseNumber = e => {
    setNewCourseNumber(e.currentTarget.value);
  };

  const onNewCourseSubmit = () => {
    axios({
      method: 'post',
      data: {
        course_subject: newCourseSubject,
        course_number: newCourseNumber
      },
      headers: { authorization: cookies.token },
      url: API_ROUTES.COURSEITEMS,
      baseURL: apiBaseUrl
    })
      .then(function(response) {
        fetchAllCourses();
        unassignedBoardRef.current.updateCourses();
        setNewCourseSubject('');
        setNewCourseNumber('');
      })
      .catch(function(error) {
        console.log(error);
        window.alert(copy.error.newCourse);
      });
  };

  const renderDnDBoard = () => {
    if (semesterInfo.length > 0) {
      return semesterInfo.map(semester_group => {
        return (
          <DnDBoard
            id={semester_group.id}
            key={semester_group.id}
            semester={semester_group.semester}
            styleClass={DnDBoardType.ASSIGNED}
          ></DnDBoard>
        );
      });
    }
  };
  useEffect(() => {
    fetchSavedSemesters();
    fetchAllCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleModalPortal();
  }, [handleModalPortal]);

  return (
    <section className={classnames(styles.coursePlanner)}>
      <div className={styles.boardContainer}>{renderDnDBoard()}</div>
      <div className={styles.courseSelection}>
        <div className={styles.addCourses}>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => {
                dispatch(openModal(MODAL_KEYS.NEW_SEMESTER));
              }}
              className={styles.newSemester}
            >
              {copy.coursePlanner.semester}
            </button>
            <div>
              <input
                type="text"
                id="courseSubject"
                onChange={e => {
                  handleNewCourseSubject(e);
                }}
                placeholder={copy.coursePlanner.courseInput}
                value={newCourseSubject}
              />
              <input
                type="text"
                id="courseNumber"
                onChange={e => {
                  handleNewCourseNumber(e);
                }}
                placeholder={copy.coursePlanner.numberInput}
                value={newCourseNumber}
              />
              <button onClick={onNewCourseSubmit} className={styles.courseSubmit}>
                {copy.coursePlanner.course}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.unassignedCourseList}>
          <div className={styles.boardContainer}>
            <DnDBoard id={DnDBoardType.UNASSIGNED} styleClass={DnDBoardType.UNASSIGNED} ref={unassignedBoardRef} />
          </div>
        </div>
      </div>
    </section>
  );
}

CoursePlanner.propTypes = checkProps({});

CoursePlanner.defaultProps = {};

export default CoursePlanner;
