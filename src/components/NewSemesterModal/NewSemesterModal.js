import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';

import styles from './NewSemesterModal.module.scss';

import { TERM_KEYS } from '../../data/consts';
import { API_ROUTES, apiBaseUrl } from '../../data/consts';
import { addSemester } from '../../redux/modules/semester';

function NewSemesterModal({}) {
  const [semesterYear, setSemesterYear] = useState('');
  const [semesterTerm, setSemesterTerm] = useState(TERM_KEYS.FALL);
  const [cookies] = useCookies(['token']);

  const dispatch = useDispatch();

  const handleYearChange = e => {
    setSemesterYear(e.currentTarget.value);
  };

  const handleNewCourseSubmit = useCallback(() => {
    axios({
      method: 'post',
      headers: { authorization: cookies.token },
      data: {
        semester: `${semesterYear}-${semesterTerm}`
      },
      url: API_ROUTES.SEMESTERS,
      baseURL: apiBaseUrl
    })
      .then(response => {
        const data = response.data;
        dispatch(addSemester(data));
      })
      .catch(function(error) {
        console.log(error);
        window.alert('Server error, please try again');
      });
  }, [cookies.token, dispatch, semesterTerm, semesterYear]);

  return (
    <section className={classnames(styles.newSemesterModal)}>
      <div className={styles.modalContainer}>
        <h4>Enter first semester of your schedule</h4>
        <input
          type="text"
          id="year"
          onChange={e => {
            handleYearChange(e);
          }}
          placeholder="enter year (e.g 2020)"
          value={semesterYear}
        />
        <select id="semesters" onChange={e => setSemesterTerm(e.target.value)}>
          <option value={TERM_KEYS.FALL}>Fall</option>
          <option value={TERM_KEYS.WINTER}>Winter</option>
          <option value={TERM_KEYS.SPRING}>Spring</option>
        </select>
        <button onClick={() => handleNewCourseSubmit()} className={styles.submit}>
          Submit
        </button>
      </div>
    </section>
  );
}

NewSemesterModal.propTypes = checkProps({});

NewSemesterModal.defaultProps = {};

export default NewSemesterModal;
