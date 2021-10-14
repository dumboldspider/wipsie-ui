// Generated with util/create-component.js
import React from "react";
import Spacing from "./Spacing";
import Container from "../Container/Container";
import responsive from "../../utils/responsive";

export default {
  title: "Components/Spacing",
};

export const Example = () => (
  <Container style={{ width: "100%" }}>
    <Container>Spacing with '30' bellow</Container>
    <Spacing height={30} />
    <Container>Spacing with '1em' bellow</Container>
    <Spacing height={"1em"} />
    <Container>Spacing with '2em' bellow</Container>
    <Spacing height={"2em"} />
    <Container>Spacing with '3em' bellow</Container>
    <Spacing height={"3em"} />
    <Container>Spacing bellow will increase in smaller screens</Container>
    <Spacing height={responsive(100, 50)} />
    <Container>End</Container>
  </Container>
);
