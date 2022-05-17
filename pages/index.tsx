import type { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <TLoginButton
        botName="develbot"
        buttonSize={TLoginButtonSize.Large}
        lang="en"
        usePic={false}
        cornerRadius={20}
        onAuthCallback={(user) => {
          console.log('Hello, user!', user);
        }}
        requestAccess={'write'}
      />
    </div>
  )
}

export default Home
