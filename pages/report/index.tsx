import React from 'react'

import { SimpleGrid }  from '@chakra-ui/react';

import ReportCard from  '../../components/ReportCard';
import Toggle from '../../components/Toggle';

import styles from './index.module.css';
const index = () => {
    return (
        <div>
            <Toggle />
            <SimpleGrid  className={styles.grid} columns={2}  spacing={30}>
            <ReportCard />
            </SimpleGrid>
        </div>
    )
}

export default index
