import React from 'react';
import checkProps from '@jam3/react-check-extra-props';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { withRedux } from '../../redux/withRedux';

import styles from './Login.module.scss';

function Login({ copy }) {
  const UserLogin = dynamic(() => import('../../components/UserLogin/UserLogin'), {
    ssr: false
  });

  const Navbar = dynamic(() => import('../../components/Navbar/Navbar'), {
    ssr: false
  });

  return (
    <>
      <Head>
        <title>Login | Study Plan</title>
      </Head>
      <section className={classnames(styles.login)}>
        <Navbar />
        <UserLogin />
      </section>
    </>
  );
}

Login.propTypes = checkProps({
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

export default withRedux(Login);
