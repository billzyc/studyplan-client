import React, { useRef, useCallback, useEffect } from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { gsap } from 'gsap';
import Link from 'next/link';

import styles from './Landing.module.scss';
import { ReactComponent as PlanningSVG } from '../../assets/svgs/planning.svg';
import { withRedux } from '../../redux/withRedux';
import { setLandingLoaded } from '../../redux/modules/app';

function Home() {
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

export default withRedux(Home);
