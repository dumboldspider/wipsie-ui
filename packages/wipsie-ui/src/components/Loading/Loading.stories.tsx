// Generated with util/create-component.js
import React from "react";
import { Loading } from "./Loading";
import { Container } from "../Container";
import { Spacing } from "../Spacing";
import { Typography } from "../Typography";

export default {
  title: "Components/Loading",
};

export const Types = () => (
  <Container style={{ width: "50%" }}>
    <Container>
      <Typography variant="h2">Closer Loading</Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Loading size="mini" type="closer" />
        <Loading size="small" type="closer" />
        <Loading size="medium" type="closer" />
        <Loading size="large" type="closer" />
        <Loading size="xlarge" type="closer" />
      </div>
    </Container>
    <Spacing height="1em" />
    <Container>
      <Typography variant="h2">Dots Loading</Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Loading size="mini" type="dots" />
        <Loading size="small" type="dots" />
        <Loading size="medium" type="dots" />
        <Loading size="large" type="dots" />
        <Loading size="xlarge" type="dots" />
      </div>
    </Container>
    <Spacing height="1em" />
    <Container>
      <Typography variant="h2">Circle Loading</Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Loading size="mini" type="circle" />
        <Loading size="small" type="circle" />
        <Loading size="medium" type="circle" />
        <Loading size="large" type="circle" />
        <Loading size="xlarge" type="circle" />
      </div>
    </Container>
    <Spacing height="1em" />
    <Container>
      <Typography variant="h2">Orbit Loading</Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Loading size="mini" type="orbit" />
        <Loading size="small" type="orbit" />
        <Loading size="medium" type="orbit" />
        <Loading size="large" type="orbit" />
        <Loading size="xlarge" type="orbit" />
      </div>
    </Container>
    <Spacing height="1em" />
    <Container>
      <Typography variant="h2">Coin Loading</Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Loading size="mini" type="coin" />
        <Loading size="small" type="coin" />
        <Loading size="medium" type="coin" />
        <Loading size="large" type="coin" />
        <Loading size="xlarge" type="coin" />
      </div>
    </Container>
    <Spacing height="1em" />
    <Container>
      <Typography variant="h2">Rings Loading</Typography>
      <Spacing height="1em" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Loading size="mini" type="rings" />
        <Loading size="small" type="rings" />
        <Loading size="medium" type="rings" />
        <Loading size="large" type="rings" />
        <Loading size="xlarge" type="rings" />
      </div>
    </Container>
    <Spacing height="1em" />
  </Container>
);
