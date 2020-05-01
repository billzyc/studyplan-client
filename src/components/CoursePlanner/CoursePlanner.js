import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';
import { useCookies } from 'react-cookie';
import axios from 'axios';

import styles from './CoursePlanner.module.scss';

import DnDBoard, { DnDBoardType } from '../DnDBoard/DnDBoard';
import DnDCard from '../DnDCard/DnDCard';
import { APIROUTES, apiBaseUrl } from '../../data/consts';

function CoursePlanner({}) {
  const [courseInfo, setCourseInfo] = useState([]);
  const [newCourseSubject, setNewCourseSubject] = useState('');
  const [newCourseNumber, setNewCourseNumber] = useState('');
  const [cookies] = useCookies(['token']);

  const fetchSavedCourseInfo = useCallback(() => {
    axios({
      method: 'get',
      headers: { authorization: cookies.token },
      url: APIROUTES.COURSEITEMS,
      baseURL: apiBaseUrl
    })
      .then(response => {
        const data = response.data;
        console.log(data);
        setCourseInfo(data);
      })
      .catch(function(error) {
        window.alert('Server error, please try again');
        console.log(error);
      });
  }, [cookies.token]);

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

  const renderUnassigned = () => {
    if (courseInfo.length > 0) {
      return courseInfo.map(course => {
        if (!course.year_placement && !course.semester_placement) {
          return (
            <DnDCard id={course.id}>
              <p>
                {course.course_subject} {course.course_number}
              </p>
            </DnDCard>
          );
        }
      });
    }
  };

  useEffect(() => {
    fetchSavedCourseInfo();
  }, [fetchSavedCourseInfo]);

  return (
    <section className={classnames(styles.coursePlanner)}>
      {true && (
        <div className={styles.boardContainer}>
          <DnDBoard id="board1" styleClass={DnDBoardType.ASSIGNED}></DnDBoard>

          <DnDBoard id="board2" styleClass={DnDBoardType.ASSIGNED}></DnDBoard>
        </div>
      )}
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
          <DnDBoard id="board3" styleClass={DnDBoardType.UNASSIGNED}>
            {renderUnassigned()}
          </DnDBoard>
        </div>
      </div>
    </section>
  );
}

CoursePlanner.propTypes = checkProps({});

CoursePlanner.defaultProps = {};

export default CoursePlanner;
