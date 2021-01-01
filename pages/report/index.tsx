import React, { useContext } from "react";
import clsx from "clsx";
import { flattenDeep } from "lodash";
import {
  ChakraProvider,
  SimpleGrid,
  CircularProgress,
  CircularProgressLabel,
  Center,
  Skeleton,
} from "@chakra-ui/react";

import ReportCard from "../../components/ReportCard";
import Toggle from "../../components/Toggle";
import SEOContext from "../../context/SEO/SEOContext";
import { ReportCategory } from "../../components/types";

import styles from "./index.module.css";
const index = (props) => {
  const seoContext = React.useContext(SEOContext);
  const { maxScore, pages, scored, site, loading } = seoContext;
  const latestPage = pages.pop();

  const achieved =
    latestPage && site
      ? Array.from(new Set([...latestPage.achieved, ...site.achieved]))
      : [];
  const issues =
    latestPage && site
      ? Array.from(new Set([...latestPage.issues, ...site.issues]))
      : [];
  const score = ((scored * 100) / maxScore).toPrecision(3);
  if (loading) {
    return (
      <>
        <SimpleGrid className={styles.grid} columns={2} spacing={30}>
          <Skeleton
            className={clsx(styles.marginTop)}
            height="100px"
          ></Skeleton>
          <Skeleton
            className={clsx(styles.marginTop)}
            height="100px"
          ></Skeleton>
          <Skeleton
            className={clsx(styles.marginTop)}
            height="100px"
          ></Skeleton>
          <Skeleton
            className={clsx(styles.marginTop)}
            height="100px"
          ></Skeleton>
          <Skeleton
            className={clsx(styles.marginTop)}
            height="100px"
          ></Skeleton>
          <Skeleton
            className={clsx(styles.marginTop)}
            height="100px"
          ></Skeleton>
        </SimpleGrid>
      </>
    );
  } else {
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
          {issues.map(({ warning, value }, idx) => {
            return (
              <ReportCard
                key={idx}
                description={value}
                title={warning}
                category={ReportCategory.warning}
              />
            );
          })}
        </SimpleGrid>
        <SimpleGrid className={styles.grid} columns={2} spacing={30}>
          {achieved.map(({ achievement, value }, idx) => {
            return (
              <ReportCard
                key={idx}
                description={value}
                title={achievement}
                category={ReportCategory.success}
              />
            );
          })}
        </SimpleGrid>
      </div>
    );
  }
};

export default index;
