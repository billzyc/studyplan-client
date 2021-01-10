import React, { useState } from 'react';
import checkProps from '@jam3/react-check-extra-props';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import axios from 'axios';
import Link from 'next/link';

import { API_ROUTES, apiBaseUrl } from '../../data/consts';
import copy from '../../data/copy.json';
import { ROUTE_KEYS } from '../../data/consts';

import styles from './UserRegister.module.scss';
import { ReactComponent as RegisterSVG } from '../../assets/svgs/register.svg';

function UserRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handleNameChange = (e) => {
    setName(e.currentTarget.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onRegisterSubmit = () => {
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
      .then(function () {
        router.push(ROUTE_KEYS.LOGIN);
      })
      .catch(function (error) {
        console.log(error.response);
        if (error?.response?.data && Object.keys(error?.response?.data).length > 0) {
          window.alert(`${Object.keys(error.response.data)[0]}: ${Object.values(error.response.data)[0]}`);
        } else {
          window.alert(copy.error.register);
        }
      });
  };

  return (
    <section className={classnames(styles.userRegister)}>
      <div className={classnames(styles.signUpContainer)}>
        <RegisterSVG className={styles.registerSVG} />
        <h2>Register</h2>

        <input
          type="text"
          id="name"
          onChange={(e) => {
            handleNameChange(e);
          }}
          placeholder={copy.register.nameInput}
          value={name}
        />
        <input
          type="email"
          id="email"
          required
          onChange={(e) => {
            handleEmailChange(e);
          }}
          className={styles.emailInput}
          placeholder={copy.register.emailInput}
          value={email}
        />
        <input
          type="password"
          onChange={(e) => {
            handlePasswordChange(e);
          }}
          placeholder={copy.register.passwordInput}
          value={password}
        />
        <input type="submit" onClick={onRegisterSubmit} className={styles.submit} value={copy.register.submit} />

        <p>Already got an account?</p>
        <Link href="/login">
          <a className={styles.links}>Login</a>
        </Link>
      </div>
    </section>
  );
}

UserRegister.propTypes = checkProps({});

export default UserRegister;
