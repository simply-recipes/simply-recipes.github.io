import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

import styles from '../styles/Layout.module.css';

interface LayoutProps {
  subtitle?: string;
  children: React.ReactNode;
}

class Layout extends React.Component<LayoutProps> {
  render() {
    const { subtitle, children } = this.props;

    return (
      <>
        <Head>
          <title>{ subtitle ? subtitle + ' | ' : '' }Simply Recipes</title>
        </Head>
        <div className={styles.container}>
          <Navbar />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </>
    );
  }
}

export default Layout;
