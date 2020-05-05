import React, { useState } from 'react';
import checkProps from '@jam3/react-check-extra-props';
import Router from 'next/router';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useCookies } from 'react-cookie';
import axios from 'axios';

import { API_ROUTES, apiBaseUrl } from '../../data/consts';

import styles from './UserRegister.module.scss';

function UserRegister({ copy }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [cookies, setCookie] = useCookies(['token']);

  const handleEmailChange = e => {
    setEmail(e.currentTarget.value);
  };

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.currentTarget.value);
  };

  const onLoginSubmit = () => {
    axios({
      method: 'post',
      data: {
        email: email,
        name: name,
        password: password
      },
      url: API_ROUTES.PROFILE,
      baseURL: apiBaseUrl
    })
      .then(function(response) {
        Router.push('/signin');
      })
      .catch(function(error) {
        window.alert('Registration error, please try again');
        console.log(error);
      });
  };

  return (
    <section className={classnames(styles.userRegister)}>
      <h2>Register</h2>

      <input
        type="text"
        id="name"
        onChange={e => {
          handleNameChange(e);
        }}
        placeholder="enter name"
        value={name}
      />
      <input
        type="email"
        id="email"
        required
        onChange={e => {
          handleEmailChange(e);
        }}
        className={styles.emailInput}
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
      <input type="submit" onClick={onLoginSubmit} className={styles.submit} value="Submit" />
    </section>
  );
}

UserRegister.propTypes = checkProps({
  copy: PropTypes.object
});

export default UserRegister;
