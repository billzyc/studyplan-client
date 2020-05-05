import React, { useState } from 'react';
import checkProps from '@jam3/react-check-extra-props';
import Router from 'next/router';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import axios from 'axios';

import { API_ROUTES, apiBaseUrl } from '../../data/consts';
import copy from '../../data/copy.json';
import { ROUTE_KEYS } from '../../data/consts';

import styles from './UserRegister.module.scss';

function UserRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

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
        Router.push(ROUTE_KEYS.SIGN_IN);
      })
      .catch(function(error) {
        window.alert(copy.error.register);
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
        placeholder={copy.register.nameInput}
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
        placeholder={copy.register.emailInput}
        value={email}
      />
      <input
        type="password"
        onChange={e => {
          handlePasswordChange(e);
        }}
        placeholder={copy.register.passwordInput}
        value={password}
      />
      <input type="submit" onClick={onLoginSubmit} className={styles.submit} value={copy.register.submit} />
    </section>
  );
}

UserRegister.propTypes = checkProps({});

export default UserRegister;
