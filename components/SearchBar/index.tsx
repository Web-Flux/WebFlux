import React, { useState, useContext } from "react";
import { Input } from "@chakra-ui/react";
import clsx from "clsx";

import SEOContext from "../../context/SEO/SEOContext";

import styles from "./index.module.css";

const index = () => {
  const seoContext = useContext(SEOContext);
  const [url, setUrl] = useState("");
  const handleChange = (event) => {
    setUrl(event.target.value);
    seoContext.setUrl(url);
  };

  return (
    <div>
      <Input
        value={url}
        onChange={handleChange}
        className={clsx(styles.search)}
        focusBorderColor="#00dfd8"
        variant="outline"
        placeholder="http://www.example.com"
      />
    </div>
  );
};

export default index;
