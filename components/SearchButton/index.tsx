import React, { useContext } from "react";
import clsx from "clsx";

import SEOContext from "../../context/SEO/SEOContext";
import styles from "./index.module.css";

const index = () => {
  const seoContext = useContext(SEOContext);

  const handleClick = () => {
    console.log(seoContext.url)
    seoContext.getReport(seoContext.url);
  };
  return (
    <button onClick={handleClick} className={clsx(styles.glowOnHover)}>
      Generate Report!
    </button>
  );
};

export default index;
