// Generated with util/create-component.js
import React from "react";
import { Skeleton } from "./Skeleton";
import { Grid } from "../Grid";
import { Flex } from "../Flex";
import { Container } from "../Container";

export default {
  title: "Prototypes/Skeleton",
};

export const WithBar = () => (
  <>
    <Skeleton type="circle" radius={10} m={1} />
    <Skeleton type="circle" radius={10} color="primary" m={1} />
    <Skeleton type="round" width={"100%"} m={1} />
    <Skeleton type="rounded" width={"100%"} m={1} />
    <Skeleton type="square" width={"100%"} m={1} />
  </>
);

export const WithBar2 = () => (
  <>
    <Container minWidth="550px">
      <Grid container>
        <Grid item xs={3}>
          <Skeleton type="circle" radius={15} />
        </Grid>
        <Grid item xs={9}>
          <Skeleton type="rounded" width={"100%"} height={1} p={1} mb={1.2} />
          <Skeleton type="rounded" width={"100%"} height={1} p={1} mb={1.2} />
          <Skeleton type="rounded" width={"100%"} height={1} p={1} mb={1.2} />
          <Skeleton type="rounded" width={"100%"} height={1} p={1} mb={1.2} />
          <Skeleton type="rounded" width={"100%"} height={1} p={1} mb={1.2} />
        </Grid>
      </Grid>
    </Container>
  </>
);
