import React, { useState } from 'react';
import checkProps from '@jam3/react-check-extra-props';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { useCookies } from 'react-cookie';

import { useDispatch } from 'react-redux';
import { updateProfile } from '../../redux/modules/profile';
import { replaceSemester } from '../../redux/modules/semester';
import { replaceCourse } from '../../redux/modules/course';
import copy from '../../data/copy.json';
import { fetchUserDataFromLogin } from '../../utils/api/getUserData';

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
    fetchUserDataFromLogin(
      email,
      password,
      setCookie,
      dispatch,
      updateProfile,
      router,
      cookies,
      replaceSemester,
      replaceCourse
    );
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
