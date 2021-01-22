import React from 'react'

import { ChakraProvider, SimpleGrid, CircularProgress, CircularProgressLabel, Center } from '@chakra-ui/react';


import ReportCard from  '../../components/ReportCard';
import Toggle from '../../components/Toggle';

import styles from './index.module.css';
const index = () => {
    return (
        <ChakraProvider>
        <div>
            <Center className={styles.totalScore}>
            <CircularProgress value = {50} thickness="15px" size="100px" color="#0edaff">
                <CircularProgressLabel>50</CircularProgressLabel>
            </CircularProgress>
            </Center>
            <Toggle />
            <SimpleGrid  className={styles.grid} columns={2}  spacing={30}>
            <ReportCard />
            </SimpleGrid>
        </div>
        </ChakraProvider>
    )
}

export default index
