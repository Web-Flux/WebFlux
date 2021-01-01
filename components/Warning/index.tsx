import React, { Fragment } from "react";
import clsx from "clsx";

import styles from "./index.module.css";
const index = () => {
  return (
    <>
     <svg className={clsx(styles.checkmark)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
  <circle className={clsx(styles.checkmark__circle)} cx="26" cy="26" r="25" fill="none" />
  <path className={clsx(styles.checkmark__check)} fill="none" d="M16 16 36 36 M36 16 16 36" />
</svg>
    </>
  );
};

export default index;
