import Head from 'next/head'
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import styles from '../styles/Home.module.css'


import HomePage from './HomePage';

export default function Home() {
  return (
    <ChakraProvider>
      <CSSReset />
    <div className={styles.container}>
      <Head>
        <title>SEO Enhancer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
    </ChakraProvider>
  )
}
