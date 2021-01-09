import React, { useRef, useCallback, useEffect, useLayoutEffect } from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import styles from './index.module.scss';
import { fetchUserDataFromCookie, fetchSavedSemesters, fetchAllCourses } from '../utils/api/getUserData';
import { updateProfile } from '../redux/modules/profile';
import { replaceSemester } from '../redux/modules/semester';
import { replaceCourse } from '../redux/modules/course';

import { withRedux } from '../redux/withRedux';

function Home() {
  const CoursesContainer = dynamic(() => import('../components/CoursesContainer/CoursesContainer'), {
    ssr: false
  });

  const Landing = dynamic(() => import('../components/Landing/Landing'), {
    ssr: false
  });

  const dispatch = useDispatch();
  const [cookies] = useCookies(['token']);
  const router = useRouter();
  const { profile, courseInfo, semesterInfo } = useSelector((state) => state);

  useLayoutEffect(() => {
    const getDataFromCookie = async () => {
      const isTokenValid = await fetchUserDataFromCookie(cookies, dispatch, updateProfile);
      if (isTokenValid) {
        fetchSavedSemesters(cookies, dispatch, replaceSemester, router);
        fetchAllCourses(cookies, dispatch, replaceCourse, router);
      }
    };
    if (cookies.token) {
      getDataFromCookie();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return profile?.email && courseInfo && semesterInfo ? <CoursesContainer /> : <Landing />;
}

export default withRedux(Home);
