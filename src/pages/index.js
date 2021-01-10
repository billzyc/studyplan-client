import React, { useLayoutEffect } from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
// import { gsap } from 'gsap';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import styles from './index.module.scss';
import { ReactComponent as PlanningSVG } from '../assets/svgs/planning.svg';
import { updateProfile } from '../redux/modules/profile';
import { API_ROUTES, apiBaseUrl, ROUTE_KEYS } from '../data/consts';

import { withRedux } from '../redux/withRedux';
import { setLandingLoaded } from '../redux/modules/app';

function Landing() {
  // const containerRef = useRef();
  const dispatch = useDispatch();
  const [cookies] = useCookies(['token']);
  const router = useRouter();
  const { profile, app } = useSelector((state) => state);

  // const animateInInit = useCallback(() => {
  //   gsap.set(containerRef.current, { autoAlpha: 0 });
  // }, []);

  // const animateIn = useCallback(async () => {
  //   await gsap.to(containerRef.current, { duration: 0.5, autoAlpha: 1, delay: 0.3 });
  //   dispatch(setLandingLoaded(true));
  // }, [dispatch]);

  // useEffect(() => {
  //   animateInInit();
  // }, [animateInInit]);

  // useEffect(() => {
  //   animateIn();
  // }, [animateIn]);

  useLayoutEffect(() => {
    const getDataFromCookie = async () => {
      const response = await axios({
        method: 'get',
        headers: { Authorization: cookies.token },
        url: API_ROUTES.PROFILE,
        baseURL: apiBaseUrl
      });
      const data = response.data;
      if (data.length > 0) {
        await dispatch(updateProfile(data[0]));
      } else {
        console.log('login error');
      }
    };
    if (cookies.token) {
      getDataFromCookie();
    } else {
      dispatch(setLandingLoaded(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (profile?.email && profile?.id) {
      router.push(ROUTE_KEYS.COURSES);
    }
  }, [profile, profile.email, profile.id, router]);

  return app.landingLoaded ? (
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
  ) : (
    <Loader type="Rings" color="#00BFFF" height={80} width={80} timeout={3000} />
  );
}

export default withRedux(Landing);
