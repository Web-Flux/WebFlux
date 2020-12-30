import Head from "next/head";
import Link from "next/link";

import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

import SEOState from "../context/SEO/SEOState";
import HomePage from "./HomePage";

export default function Home() {
  return (
  
      
        <div className={styles.container}>
          <Head>
            <title>SEO Enhancer</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <HomePage />
        </div>
  );
}
