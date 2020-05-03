import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import styles from './CoursePlanner.module.scss';

import DnDBoard, { DnDBoardType } from '../DnDBoard/DnDBoard';
import DnDCard from '../DnDCard/DnDCard';
import NewSemesterModal from '../NewSemesterModal/NewSemesterModal';
import { APIROUTES, apiBaseUrl } from '../../data/consts';
import { replaceSemester } from '../../redux/modules/semester';
import { replaceCourse } from '../../redux/modules/course';

function CoursePlanner({}) {
  const unassignedBoardRef = useRef();
  const [isSemesterLoaded, setIsSemesterLoaded] = useState(false);
  const [newCourseSubject, setNewCourseSubject] = useState('');
  const [newCourseNumber, setNewCourseNumber] = useState('');
  const [cookies] = useCookies(['token']);

  const dispatch = useDispatch();
  const { semesterInfo, courseInfo } = useSelector(state => state);

  const fetchSavedSemesters = useCallback(() => {
    axios({
      method: 'get',
      headers: { authorization: cookies.token },
      url: APIROUTES.SEMESTERS,
      baseURL: apiBaseUrl
    })
      .then(response => {
        const data = response.data;
        dispatch(replaceSemester(data));
        setIsSemesterLoaded(true);
      })
      .catch(function(error) {
        console.log(error);
        window.alert('Fetch semester information error, please try again');
      });
  }, [cookies.token, dispatch]);

  const fetchAllCourses = useCallback(() => {
    axios({
      method: 'get',
      headers: { authorization: cookies.token },
      url: APIROUTES.COURSEITEMS,
      baseURL: apiBaseUrl
    })
      .then(response => {
        const data = response.data;
        dispatch(replaceCourse(data));
      })
      .catch(function(error) {
        console.log(error);
        window.alert('Fetch all course information error, please try again');
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
      url: APIROUTES.COURSEITEMS,
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
        window.alert('Login error, please try again');
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
  return (
    <section className={classnames(styles.coursePlanner)}>
      {isSemesterLoaded && Object.keys(semesterInfo).length === 0 ? <NewSemesterModal /> : null}
      <div className={styles.boardContainer}>{renderDnDBoard()}</div>
      <div className={styles.courseSelection}>
        <div className={styles.addCourses}>
          <input
            type="text"
            id="courseSubject"
            onChange={e => {
              handleNewCourseSubject(e);
            }}
            placeholder="enter course subject (e.g CS)"
            value={newCourseSubject}
          />
          <input
            type="text"
            id="courseNumber"
            onChange={e => {
              handleNewCourseNumber(e);
            }}
            placeholder="enter course number (e.g 136)"
            value={newCourseNumber}
          />
          <button onClick={onNewCourseSubmit} className={styles.submit}>
            Submit
          </button>
        </div>
        <div className={styles.unassignedCourseList}>
          <DnDBoard id={DnDBoardType.UNASSIGNED} styleClass={DnDBoardType.UNASSIGNED} ref={unassignedBoardRef} />
        </div>
      </div>
    </section>
  );
}

CoursePlanner.propTypes = checkProps({});

CoursePlanner.defaultProps = {};

export default CoursePlanner;
