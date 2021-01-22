import React from 'react'
import clsx from 'clsx';

import styles from './index.module.css';

const index = () => {
    return (
      <button className={clsx(styles.glowOnHover)}>Generate Report!</button>
    )
}

export default index
