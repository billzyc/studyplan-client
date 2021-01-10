import React from 'react';
import checkProps from '@jam3/react-check-extra-props';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { removeSemester } from '../../redux/modules/semester';
import { removeCourse } from '../../redux/modules/course';
import { removeProfile } from '../../redux/modules/profile';
import { updateCoursesLoaded } from '../../redux/modules/app';

import styles from './Navbar.module.scss';

function Navbar() {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const dispatch = useDispatch();
  const router = useRouter();
  const { profile } = useSelector((state) => state);

  const logOut = async () => {
    await dispatch(updateCoursesLoaded(false));
    await dispatch(removeSemester());
    await dispatch(removeCourse());
    await dispatch(removeProfile());
    await removeCookie('token', { path: '/' });
    router.push('/');
  };
  return profile?.id && profile?.email ? (
    <section className={classnames(styles.navbar)}>
      <h4>{profile.name}'s Course Plan</h4>
      <button onClick={logOut} className={classnames(styles.logOut)}>
        Log Out
      </button>
    </section>
  ) : null;
}

Navbar.propTypes = checkProps({
  copy: PropTypes.object
});
export default Navbar;
