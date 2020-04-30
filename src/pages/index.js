import React, { useRef, useCallback, useEffect } from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { gsap } from 'gsap';
import Link from 'next/link';

import styles from './index.module.scss';

import { withRedux } from '../redux/withRedux';
import { setLandingLoaded } from '../redux/modules/app';

function Landing() {
  const containerRef = useRef();
  const dispatch = useDispatch();

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

  return (
    <section className={styles.Landing}>
      <Head>
        <title>Course Planner</title>
      </Head>
      <p>hello! This is work in progress</p>
      <div className={styles.links}>
        <Link href="/signin">
          <a>Login Page</a>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </div>
    </section>
  );
}

export default withRedux(Landing);
