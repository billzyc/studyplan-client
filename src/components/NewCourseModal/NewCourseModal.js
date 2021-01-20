import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';

import styles from './NewCourseModal.module.scss';

import { ReactComponent as CloseSVG } from '../../assets/svgs/close.svg';
import { API_ROUTES, apiBaseUrl, UW_API_ROUTES, KEYS } from '../../data/consts';
import copy from '../../data/copy.json';

const NewCourseModal = ({ unassignedBoardRef, fetchAllCourses, closeCourseModal }) => {
  const [newCourseSubject, setNewCourseSubject] = useState('');
  const [newCourseNumber, setNewCourseNumber] = useState('');
  const [cookies] = useCookies(['token']);

  const dispatch = useDispatch();

  const handleNewCourseSubject = (e) => {
    setNewCourseSubject(e.currentTarget.value);
  };

  const handleNewCourseNumber = (e) => {
    setNewCourseNumber(e.currentTarget.value);
  };

  const handleNewCourseSubmit = async () => {
    const response = await axios.get(
      `${UW_API_ROUTES.BASEURL}${newCourseSubject}/${newCourseNumber}${UW_API_ROUTES.PREREQ}`,
      {
        params: {
          key: KEYS.UW
        }
      }
    );

    const preReqs = await { preReqs: response.data.data.prerequisites_parsed };

    axios({
      method: 'post',
      data: {
        course_subject: newCourseSubject,
        course_number: newCourseNumber
        // reqs: JSON.stringify({ ...preReqs })
      },
      headers: { authorization: cookies.token },
      url: API_ROUTES.COURSE_ITEMS,
      baseURL: apiBaseUrl
    })
      .then(function (response) {
        fetchAllCourses();
        unassignedBoardRef.current.updateCourses();
        setNewCourseSubject('');
        setNewCourseNumber('');
        closeCourseModal();
      })
      .catch(function (error) {
        if (error?.response?.data && Object.keys(error?.response?.data).length > 0) {
          window.alert(`${Object.keys(error.response.data)[0]}: ${Object.values(error.response.data)[0]}`);
        } else {
          window.alert(copy.error.newCourse);
        }
      });
  };

  return (
    <section className={classnames(styles.newCourseModal)}>
      <div className={styles.modalContainer}>
        <div
          className={styles.close}
          onClick={() => {
            closeCourseModal();
          }}
        >
          <CloseSVG />
        </div>
        <h4>{copy.newCourseModal.title}</h4>
        <input
          type="text"
          id="courseSubject"
          onChange={(e) => {
            handleNewCourseSubject(e);
          }}
          placeholder={copy.newCourseModal.courseInput}
          value={newCourseSubject}
        />
        <input
          type="text"
          id="courseNumber"
          onChange={(e) => {
            handleNewCourseNumber(e);
          }}
          placeholder={copy.newCourseModal.numberInput}
          value={newCourseNumber}
        />
        <button
          onClick={handleNewCourseSubmit}
          className={`${styles.submit} ${newCourseSubject && newCourseNumber ? false : styles.disabled}`}
          disabled={newCourseSubject && newCourseNumber ? false : true}
        >
          {copy.newCourseModal.submit}
        </button>
      </div>
    </section>
  );
};

NewCourseModal.propTypes = checkProps({});

NewCourseModal.defaultProps = {};

export default NewCourseModal;
