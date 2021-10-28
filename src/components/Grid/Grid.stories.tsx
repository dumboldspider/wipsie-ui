// Generated with util/create-component.js
import React from "react";
import { Grid } from "./Grid";
import { Container } from "../Container";
import { Button } from "../Button";

export default {
  title: "Prototypes/Grid",
};

export const WithBaz = () => (
  <Grid container spacing={1.5}>
    <Grid item xs={100} sm={6} md={4} lg={3} xl={6}>
      <Container>a</Container>
    </Grid>
    <Grid item xs={100} sm={6} md={4} lg={6} xl={6}>
      <Container>a</Container>
    </Grid>
    <Grid item xs={100} sm={12} md={4} lg={3} xl={12}>
      <Container>a</Container>
    </Grid>

    <Grid item xs={2}>
      <Container>a</Container>
    </Grid>
    <Grid item xs>
      <Container>a</Container>
    </Grid>
    <Grid item xs={2}>
      <Container>a</Container>
    </Grid>
    <Grid item xs={12}>
      <Container>a</Container>
    </Grid>
  </Grid>
);

export const WithBaz2 = () => (
  <Grid container spacing={1.5}>
    <Grid item xs={100} sm={6} md={4} lg={3} xl={6}>
      <Button fullWidth>a</Button>
    </Grid>
    <Grid item xs={100} sm={6} md={4} lg={6} xl={6}>
      <Button fullWidth>a</Button>
    </Grid>
    <Grid item xs={100} sm={12} md={4} lg={3} xl={12}>
      <Button fullWidth>a</Button>
    </Grid>
  </Grid>
);
