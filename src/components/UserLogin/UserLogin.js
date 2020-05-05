import React, { useState } from 'react';
import checkProps from '@jam3/react-check-extra-props';
import Router from 'next/router';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useCookies } from 'react-cookie';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { updateProfile } from '../../redux/modules/profile';
import { API_ROUTES, apiBaseUrl } from '../../data/consts';
import copy from '../../data/copy.json';

import styles from './UserLogin.module.scss';

function UserLogin() {
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
      url: API_ROUTES.LOGIN,
      baseURL: apiBaseUrl
    })
      .then(function(response) {
        const token = response.data.token;
        setCookie('token', `Token ${token}`, { path: '/' });
        axios({
          method: 'get',
          headers: { authorization: cookies.token },
          url: API_ROUTES.PROFILE,
          baseURL: apiBaseUrl
        })
          .then(async response => {
            const data = response.data;
            await dispatch(updateProfile(data[0]));
            Router.push('/courses');
          })
          .catch(function(error) {
            window.alert(copy.error.fetchProfile);
            console.log(error);
          });
      })
      .catch(function(error) {
        window.alert(copy.error.login);
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
        placeholder={copy.login.emailInput}
        value={email}
      />
      <input
        type="password"
        onChange={e => {
          handlePasswordChange(e);
        }}
        placeholder={copy.login.passwordInput}
        value={password}
      />
      <button onClick={onLoginSubmit} className={styles.submit}>
        {copy.login.submit}
      </button>
    </section>
  );
}

UserLogin.propTypes = checkProps({});

export default UserLogin;
