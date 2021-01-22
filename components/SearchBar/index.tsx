import React from 'react'
import { Input } from "@chakra-ui/react";
import clsx  from 'clsx';

import styles from './index.module.css';

const index = () => {
    return (
        <div>
            
            <Input className={clsx(styles.search)} focusBorderColor="#00dfd8" variant="outline" placeholder="www.example.com" /> 
            
        </div>
    )
}

export default index
