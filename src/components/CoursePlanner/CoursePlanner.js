import React, { useState, useEffect, useCallback } from 'react';
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
        window.alert('Server 1 error, please try again');
      });
  }, [cookies.token, dispatch]);

  const fetchSavedCourseInfo = useCallback(() => {
    axios({
      method: 'get',
      headers: { authorization: cookies.token },
      url: APIROUTES.COURSEITEMS,
      baseURL: apiBaseUrl
    })
      .then(response => {
        console.log(response);
        const data = response.data;
        dispatch(replaceCourse(data));
      })
      .catch(function(error) {
        window.alert('Server 2 error, please try again');
        console.log(error);
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
        fetchSavedCourseInfo();
      })
      .catch(function(error) {
        window.alert('Login error, please try again');
        console.log(error);
      });
  };

  const renderDnDBoard = () => {
    console.log(semesterInfo);
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
    fetchSavedCourseInfo();
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
          <DnDBoard id="unassigned" styleClass={DnDBoardType.UNASSIGNED} />
        </div>
      </div>
    </section>
  );
}

CoursePlanner.propTypes = checkProps({});

CoursePlanner.defaultProps = {};

export default CoursePlanner;
