import React from 'react';
import checkProps from '@jam3/react-check-extra-props';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { withRedux } from '../../redux/withRedux';

import styles from './Planner.module.scss';

function Planner({ copy }) {
  const CoursePlanner = dynamic(
    () => import(/* webpackChunkName: "LoginModal" */ '../../components/CoursePlanner/CoursePlanner'),
    {
      ssr: false
    }
  );

  const Navbar = dynamic(() => import(/* webpackChunkName: "LoginModal" */ '../../components/Navbar/Navbar'), {
    ssr: false
  });
  return (
    <>
      <Head>
        <title>Course Planner</title>
      </Head>
      <section className={classnames(styles.planner)}>
        <Navbar />
        <CoursePlanner />
      </section>
    </>
  );
}

Planner.propTypes = checkProps({
  copy: PropTypes.object
});

// export async function getStaticProps() {
//   const copy = await require('some.json');

//   return {
//     props: {
//       copy
//     }
//   };
// }

export default withRedux(Planner);
