import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import checkProps from '@jam3/react-check-extra-props';
import classnames from 'classnames';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';

import styles from './NewSemesterModal.module.scss';

import { ReactComponent as XSvg } from '../../assets/svgs/x.svg';
import { TERM_KEYS } from '../../data/consts';
import { API_ROUTES, apiBaseUrl } from '../../data/consts';
import { addSemester } from '../../redux/modules/semester';
import copy from '../../data/copy.json';
import { closeModal } from '../../redux/modules/modal';

function NewSemesterModal() {
  const [semesterYear, setSemesterYear] = useState('');
  const [semesterTerm, setSemesterTerm] = useState(TERM_KEYS.FALL);
  const [cookies] = useCookies(['token']);

  const dispatch = useDispatch();

  const handleYearChange = e => {
    setSemesterYear(e.currentTarget.value);
  };

  const handleNewSemesterSubmit = useCallback(() => {
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
        window.alert(copy.error.newSemester);
      });
  }, [cookies.token, dispatch, semesterTerm, semesterYear]);

  return (
    <section className={classnames(styles.newSemesterModal)}>
      <div className={styles.modalContainer}>
        <div
          className={styles.close}
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          <XSvg />
        </div>
        <h4>{copy.newSemesterModal.title}</h4>
        <input
          type="text"
          id="year"
          onChange={e => {
            handleYearChange(e);
          }}
          placeholder={copy.newSemesterModal.enterYear}
          value={semesterYear}
        />
        <select id="semesters" onChange={e => setSemesterTerm(e.target.value)}>
          <option value={TERM_KEYS.FALL}>{TERM_KEYS.FALL}</option>
          <option value={TERM_KEYS.WINTER}>{TERM_KEYS.WINTER}</option>
          <option value={TERM_KEYS.SPRING}>{TERM_KEYS.SPRING}</option>
        </select>
        <button onClick={() => handleNewSemesterSubmit()} className={styles.submit}>
          {copy.newSemesterModal.submit}
        </button>
      </div>
    </section>
  );
}

NewSemesterModal.propTypes = checkProps({});

NewSemesterModal.defaultProps = {};

export default NewSemesterModal;
