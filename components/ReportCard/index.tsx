import React from 'react'
import clsx from 'clsx';

import Success from '../Success';

import styles from './index.module.css';

const index = () => {
    return (
        <div className={clsx(styles.box)}>
             <span className={clsx(styles.tickAlign)}>
          
          <Success />
          </span>

            <span className={clsx(styles.headingAlign)}>
              Test stat
              </span>
              <span>
                  <div className = {clsx(styles.contentAlign)}>
                      <p>sddikffbhsdjkdfvbbsjkfbnwekinbfkwnfdnbfwsjeffsdljfnsdmkjnfsdjnckseneknwnw</p>
                      </div>
                  </span>
             
          
        </div>
    )
}

export default index
