import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Copyright from './Copyright';

import vercel from '../public/vercel.svg';
import styles from '../styles/Footer.module.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src={vercel} alt="Vercel Logo" width={72} height={16} />
          </span>
        </Link>
        <Copyright />
      </footer>
    );
  }
}

export default Footer;
