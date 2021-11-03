// Generated with util/create-component.js
import React from "react";
import { Fixed } from "./Fixed";
import { Spacing } from "../Spacing";
import { IconButton } from "../IconButton";
import { Container } from "../Container";
import { EyeFilled, LockFilled, EyeInvisibleFilled } from "@ant-design/icons";

export default {
  title: "Prototypes/Fixed",
};

export const WithBar = () => (
  <>
    <Fixed type="fixed" position="top left">
      <Container>
        <IconButton icon={<EyeFilled />} />
      </Container>
    </Fixed>
    <Fixed type="fixed" position="top center">
      <Container>
        <IconButton icon={<EyeFilled />} />
      </Container>
    </Fixed>
    <Fixed type="fixed" position="top right">
      <Container>
        <IconButton icon={<EyeFilled />} />
      </Container>
    </Fixed>

    <Fixed type="fixed" position="center left">
      <Container>
        <IconButton icon={<EyeFilled />} />
      </Container>
    </Fixed>
    <Fixed type="fixed" position="center">
      <Container>
        <IconButton icon={<EyeFilled />} />
      </Container>
    </Fixed>
    <Fixed type="fixed" position="center right">
      <Container>
        <IconButton icon={<EyeFilled />} />
      </Container>
    </Fixed>

    <Fixed type="fixed" position="bottom left">
      <Container>
        <IconButton icon={<EyeFilled />} />
      </Container>
    </Fixed>
    <Fixed type="fixed" position="bottom center">
      <Container>
        <IconButton icon={<EyeFilled />} />
      </Container>
    </Fixed>
    <Fixed type="fixed" position="bottom right">
      <Container>
        <IconButton icon={<EyeFilled />} />
      </Container>
    </Fixed>
  </>
);
