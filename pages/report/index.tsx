import React from "react";

import {
  ChakraProvider,
  SimpleGrid,
  CircularProgress,
  CircularProgressLabel,
  Center,
} from "@chakra-ui/react";

import ReportCard from "../../components/ReportCard";
import Toggle from "../../components/Toggle";
import SEOState from "../../context/SEO/SEOState";
import SEOContext from "../../context/SEO/SEOContext";
import response from "../../response";

import styles from "./index.module.css";
const index = (props) => {
  const seoContext = React.useContext(SEOContext);
  const { max_score, pages, scored, site } = response;
  const score = ((scored * 100) / max_score).toPrecision(3);
  return (
        <div>
          <Center className={styles.totalScore}>
            <CircularProgress
              value={score}
              thickness="15px"
              size="100px"
              color="#0edaff"
            >
              <CircularProgressLabel>{score}</CircularProgressLabel>
            </CircularProgress>
          </Center>
          <Toggle />
          <SimpleGrid className={styles.grid} columns={2} spacing={30}>
            {pages.map((page, idx) => {
              if(page.description){
              return (
                <ReportCard
                  key={idx}
                  description={page.description}
                  title={page.title}
                />
              );}
            })}
          </SimpleGrid>
        </div>
  );
};

export default index;
