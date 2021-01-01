import React, {useContext} from "react";
import clsx from 'clsx';
import { flattenDeep } from 'lodash';
import {
  ChakraProvider,
  SimpleGrid,
  CircularProgress,
  CircularProgressLabel,
  Center,
  Skeleton
} from "@chakra-ui/react";

import ReportCard from "../../components/ReportCard";
import Toggle from "../../components/Toggle";
import SEOContext from "../../context/SEO/SEOContext";
import response from "../../response";

import styles from "./index.module.css";
const index = (props) => {
  const seoContext = React.useContext(SEOContext);
  const { max_score, pages, scored, site, loading } = response;
  const score = ((scored * 100) / max_score).toPrecision(3);
  if(loading){
   return(
     <>
     <SimpleGrid className={styles.grid} columns={2} spacing={30}>
    <Skeleton className={clsx(styles.marginTop)} height="100px"></Skeleton>
    <Skeleton className={clsx(styles.marginTop)} height="100px"></Skeleton>
    <Skeleton className={clsx(styles.marginTop)} height="100px"></Skeleton>
    <Skeleton className={clsx(styles.marginTop)} height="100px"></Skeleton>
    <Skeleton className={clsx(styles.marginTop)} height="100px"></Skeleton>
    <Skeleton className={clsx(styles.marginTop)} height="100px"></Skeleton>
    </SimpleGrid>
    </>
   )     
  }else{
  return (
        <div>
          {console.log("pages" + pages)}
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
}

export default index;
