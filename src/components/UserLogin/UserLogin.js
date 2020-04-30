import React, { useState } from 'react';
import checkProps from '@jam3/react-check-extra-props';
import Router from 'next/router';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useCookies } from 'react-cookie';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { updateProfile } from '../../redux/modules/profile';
import { APIROUTES, apiBaseUrl } from '../../data/consts';

import styles from './UserLogin.module.scss';

function UserLogin({ copy }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['token']);

  const dispatch = useDispatch();

  const handleEmailChange = e => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.currentTarget.value);
  };

  const onLoginSubmit = () => {
    axios({
      method: 'post',
      data: {
        username: email,
        password: password
      },
      url: APIROUTES.LOGIN,
      baseURL: apiBaseUrl
    })
      .then(function(response) {
        const token = response.data.token;
        setCookie('token', `Token ${token}`, { path: '/' });
        axios({
          method: 'get',
          headers: { authorization: cookies.token },
          url: APIROUTES.PROFILE,
          baseURL: apiBaseUrl
        })
          .then(async response => {
            const data = response.data;
            await dispatch(updateProfile(data[0]));
            Router.push('/planner');
          })
          .catch(function(error) {
            window.alert('Server error, please try again');
            console.log(error);
          });
      })
      .catch(function(error) {
        window.alert('Login error, please try again');
        console.log(error);
      });
  };

  return (
    <section className={classnames(styles.userLogin)}>
      <h2>Sign in</h2>
      <input
        type="email"
        id="email"
        onChange={e => {
          handleEmailChange(e);
        }}
        placeholder="enter email"
        value={email}
      />
      <input
        type="password"
        onChange={e => {
          handlePasswordChange(e);
        }}
        placeholder="enter password"
        value={password}
      />
      <button onClick={onLoginSubmit} className={styles.submit}>
        Submit
      </button>
    </section>
  );
}

UserLogin.propTypes = checkProps({
  copy: PropTypes.object
});

export default UserLogin;