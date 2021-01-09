import React from 'react';
import checkProps from '@jam3/react-check-extra-props';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Head from 'next/head';

import { withRedux } from '../../redux/withRedux';
import styles from './CoursesContainer.module.scss';
import CoursePlanner from '../CoursePlanner/CoursePlanner';
import ModalPortal from '../ModalPortal/ModalPortal';
import Navbar from '../Navbar/Navbar';

function CoursesContainer({ copy }) {
  return (
    <>
      <Head>
        <title>Course Planner</title>
      </Head>
      <section className={classnames(styles.courses)}>
        <ModalPortal />
        <Navbar />
        <div className={styles.coursePlannerContainer}>
          <CoursePlanner />
        </div>
      </section>
    </>
  );
}

CoursesContainer.propTypes = checkProps({
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

export default withRedux(CoursesContainer);
