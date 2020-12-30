import React from "react";
import clsx from "clsx";

import Success from "../Success";

import styles from "./index.module.css";

const index = ({ description, title }) => {
  return (
    <div className={clsx(styles.box)}>
      <span className={clsx(styles.tickAlign)}>
        <Success />
      </span>

      <span className={clsx(styles.headingAlign)}>{title}</span>
      <span>
        <div className={clsx(styles.contentAlign)}>
          <p>{description}</p>
        </div>
      </span>
    </div>
  );
};

export default index;
