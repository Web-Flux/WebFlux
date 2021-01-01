import React, { Fragment } from "react";
import clsx from "clsx";

import styles from "./index.module.css";
const index = () => {
  return (
    <>
      <svg
        className={clsx(styles.checkmark)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className={clsx(styles.checkmark_circle)}
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />
        <path
          className={clsx(styles.checkmark_check)}
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
    </>
  );
};

export default index;
