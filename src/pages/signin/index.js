import React from 'react';
import checkProps from '@jam3/react-check-extra-props';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { withRedux } from '../../redux/withRedux';

import styles from './SignIn.module.scss';

function SignIn({ copy }) {
  const UserLogin = dynamic(() => import(/* webpackChunkName: "LoginModal" */ '../../components/UserLogin/UserLogin'), {
    ssr: false
  });

  const Navbar = dynamic(() => import(/* webpackChunkName: "LoginModal" */ '../../components/Navbar/Navbar'), {
    ssr: false
  });

  return (
    <>
      <Head>
        <title>Home | Jam3 generator</title>
      </Head>
      <section className={classnames(styles.login)}>
        <Navbar />
        <UserLogin />
      </section>
    </>
  );
}

SignIn.propTypes = checkProps({
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

export default withRedux(SignIn);
