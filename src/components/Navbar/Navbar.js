import React from 'react';
import checkProps from '@jam3/react-check-extra-props';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { replaceSemester } from '../../redux/modules/semester';
import { replaceCourse } from '../../redux/modules/course';
import { updateProfile } from '../../redux/modules/profile';

import styles from './Navbar.module.scss';

function Navbar({}) {
  const [cookies, setCookie] = useCookies(['token']);
  const dispatch = useDispatch();
  const router = useRouter();

  const logOut = () => {
    dispatch(replaceSemester(null));
    dispatch(replaceCourse(null));
    dispatch(updateProfile(null));
    setCookie('token', '', { path: '/' });
    router.push('/');
  };
  return (
    <section className={classnames(styles.navbar)}>
      <button onClick={logOut} className={classnames(styles.logOut)}>
        Log Out
      </button>
    </section>
  );
}

Navbar.propTypes = checkProps({
  copy: PropTypes.object
});
export default Navbar;
