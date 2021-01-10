import React, { useState } from 'react';
import checkProps from '@jam3/react-check-extra-props';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { useCookies } from 'react-cookie';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { updateProfile } from '../../redux/modules/profile';
import copy from '../../data/copy.json';
import { API_ROUTES, apiBaseUrl, ROUTE_KEYS } from '../../data/consts';

import styles from './UserLogin.module.scss';
import { ReactComponent as LoginSVG } from '../../assets/svgs/login.svg';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['token']);
  const router = useRouter();

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = (e) => {
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
      .then(function (response) {
        const token = `Token ${response.data.token}`;
        setCookie('token', token, { path: '/' });
        axios({
          method: 'get',
          headers: { Authorization: token },
          url: API_ROUTES.PROFILE,
          baseURL: apiBaseUrl
        })
          .then(async (response) => {
            const data = response.data;
            await dispatch(updateProfile(data[0]));
            router.push(ROUTE_KEYS.COURSES);
          })
          .catch(function (error) {
            window.alert('Unable to fetch profile information');
            console.log(error);
          });
      })
      .catch(function (error) {
        window.alert('Unable to login');
        console.log(error);
      });
  };

  return (
    <section className={classnames(styles.userLogin)}>
      <div className={classnames(styles.logInContainer)}>
        <LoginSVG className={styles.loginSVG} />
        <h2>Log in</h2>
        <input
          type="email"
          id="email"
          onChange={(e) => {
            handleEmailChange(e);
          }}
          placeholder={copy.login.emailInput}
          value={email}
        />
        <input
          type="password"
          onChange={(e) => {
            handlePasswordChange(e);
          }}
          placeholder={copy.login.passwordInput}
          value={password}
        />
        <button onClick={onLoginSubmit} className={styles.submit}>
          {copy.login.submit}
        </button>
      </div>
    </section>
  );
}

UserLogin.propTypes = checkProps({});

export default UserLogin;
