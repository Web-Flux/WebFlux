import React from 'react'
import clsx from 'clsx';
import { Container } from '@chakra-ui/react';

import  SearchBar from '../components/SearchBar';
import  Toggle from '../components/Toggle';

import styles from "./HomePage.module.css";

const HomePage = () => {
   
    return (
        <div>
            <Toggle />
            <Container maxW="xxl" centerContent>
            <span className={clsx([styles.animated ,styles.animatedPlay])}>Search.</span>
            <span className={clsx([styles.animated ,styles.animatedPlay, styles.animatedPlayE])}>Engine.</span>
            <span className={clsx([styles.animated ,styles.animatedPlay, styles.animatedPlayO])}>Optimization.</span>
            </Container>
            <SearchBar />
        </div>
    )
}

export default HomePage
