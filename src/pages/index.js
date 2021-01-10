import React, { useRef, useCallback, useEffect, useLayoutEffect } from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

import styles from './index.module.scss';
import { ReactComponent as PlanningSVG } from '../assets/svgs/planning.svg';
import { fetchUserDataFromCookie, fetchSavedSemesters, fetchAllCourses } from '../utils/api/getUserData';
import { updateProfile } from '../redux/modules/profile';
import { replaceSemester } from '../redux/modules/semester';
import { replaceCourse } from '../redux/modules/course';
import { ROUTE_KEYS } from '../data/consts';

import { withRedux } from '../redux/withRedux';
import { setLandingLoaded } from '../redux/modules/app';

function Landing() {
  const containerRef = useRef();
  const dispatch = useDispatch();
  const [cookies] = useCookies(['token']);
  const router = useRouter();

  const animateInInit = useCallback(() => {
    gsap.set(containerRef.current, { autoAlpha: 0 });
  }, []);

  const animateIn = useCallback(async () => {
    await gsap.to(containerRef.current, { duration: 0.5, autoAlpha: 1, delay: 0.3 });
    dispatch(setLandingLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    animateInInit();
  }, [animateInInit]);

  useEffect(() => {
    animateIn();
  }, [animateIn]);

  useLayoutEffect(() => {
    const getDataFromCookie = async () => {
      const isTokenValid = await fetchUserDataFromCookie(cookies, dispatch, updateProfile);
      console.log('hello', isTokenValid);
      if (isTokenValid) {
        fetchSavedSemesters(cookies, dispatch, replaceSemester, router);
        fetchAllCourses(cookies, dispatch, replaceCourse, router);
        router.push(ROUTE_KEYS.COURSES);
      }
    };
    if (cookies.token) {
      getDataFromCookie();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.Landing}>
      <Head>
        <title>Course Planner</title>
      </Head>
      <h1>My Study Plan</h1>
      <p>Easily visualize and plan your university courses with kanban boards! </p>
      <PlanningSVG className={styles.planningSVG} />
      <h3>Getting Started</h3>
      <Link href="/login">
        <a className={styles.links}>Login</a>
      </Link>
      <Link href="/register">
        <a className={styles.links}>Register</a>
      </Link>
    </section>
  );
}

export default withRedux(Landing);
