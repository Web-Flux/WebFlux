import React from 'react'
import { Button, useColorMode } from "@chakra-ui/react";
import Dark from '../../public/dark.svg';
import light from '../../public/light.svg';
import clsx from 'clsx';

import styles from './index.module.css';

const index = () => {
    const {  colorMode, toggleColorMode } = useColorMode();
    return (
        <div className={clsx(styles.right)}>
             <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <img src={Dark} className={clsx(styles.icon)} /> : <img src={light} className={clsx(styles.icon)} />}
               
               </Button> 
        </div>
    )
}

export default index
