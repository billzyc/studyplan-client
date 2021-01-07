import React, { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import styles from './CoursePlanner.module.scss';

import DnDBoard, { DnDBoardType } from '../DnDBoard/DnDBoard';
import NewCourseModal from '../NewCourseModal/NewCourseModal';
import { API_ROUTES, apiBaseUrl, MODAL_KEYS } from '../../data/consts';
import { replaceSemester } from '../../redux/modules/semester';
import { replaceCourse } from '../../redux/modules/course';
import { openModal, closeModal } from '../../redux/modules/modal';
import copy from '../../data/copy.json';

function CoursePlanner() {
  const unassignedBoardRef = useRef();
  const [isCourseModalOpen, setIsCourseModel] = useState(false);
  const [cookies] = useCookies(['token']);
  const dispatch = useDispatch();
  const { semesterInfo } = useSelector(state => state);

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
      url: API_ROUTES.COURSE_ITEMS,
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

  const closeCourseModal = () => {
    setIsCourseModel(false);
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
            fetchAllCourses={fetchAllCourses}
            setIsCourseModel={setIsCourseModel}
          ></DnDBoard>
        );
      });
    }
  };
  useLayoutEffect(() => {
    fetchSavedSemesters();
    fetchAllCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //TODO: Move NewCourseModal to ModalPortal and move semester info into redux

  return (
    <section className={classnames(styles.coursePlanner)}>
      {isCourseModalOpen ? (
        <NewCourseModal
          fetchAllCourses={fetchAllCourses}
          unassignedBoardRef={unassignedBoardRef}
          closeCourseModal={closeCourseModal}
        />
      ) : null}
      <div className={styles.boardContainer}>
        <button
          className={styles.newBoard}
          onClick={() => {
            dispatch(openModal(MODAL_KEYS.NEW_SEMESTER));
          }}
        >
          Add new Semester
        </button>
        {renderDnDBoard()}
      </div>
      <div className={styles.courseSelection}>
        <DnDBoard
          id={DnDBoardType.UNASSIGNED}
          styleClass={DnDBoardType.UNASSIGNED}
          ref={unassignedBoardRef}
          fetchAllCourses={fetchAllCourses}
          setIsCourseModel={setIsCourseModel}
        />
      </div>
    </section>
  );
}

CoursePlanner.propTypes = checkProps({});

CoursePlanner.defaultProps = {};

export default CoursePlanner;
