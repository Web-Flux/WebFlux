import React from "react";
import clsx from "clsx";

import Success from "../Success";
import Warning from "../Warning";

import styles from "./index.module.css";
import { ReportCategory } from "../types";

interface ReportCardProps {
  description: string;
  title: string;
  category: ReportCategory;
}

const index = ({ description, title, category }) => {
  return (
    <div className={clsx(styles.box)}>
      <span className={clsx(styles.tickAlign)}>
        {category === ReportCategory.success ? <Success /> : <Warning />}
      </span>

      <span className={clsx(styles.headingAlign)}>{title}</span>
      <span>
        <div className={clsx(styles.contentAlign)}>
          
          <p>{description && description.length > 50 ? description.slice(0,  35) : description}</p>
        </div>
      </span>
    </div>
  );
};

export default index;
