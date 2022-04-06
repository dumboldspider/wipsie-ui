// Generated with util/create-component.js
import React, { useState, useEffect } from "react";
import { Fixed } from "./Fixed";
import { Spacing } from "../Spacing";
import { IconButton } from "../IconButton";
import { Typography } from "../Typography";
import { Button } from "../Button";
import { Animated } from "../Animated";
import { Container } from "../Container";
import { Portal } from "../Portal";
import { Snackbar } from "../Snackbar";
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

export const Snackbar2 = () => {
  const [visible, setVisible] = React.useState(true);

  function handleClick() {
    setVisible(!visible);
  }

  return (
    <>
      <Button onClick={() => handleClick()}>Open</Button>
      <Snackbar
        id="snack"
        open={visible}
        position="top left"
        animation="fadeInLeft"
        spacing={1}
        backdrop
        onBackdropClick={() => setVisible(false)}
      >
        <Container fullWidth maxWidth="500px">
          <Typography variant="h2">Hello</Typography>
          <Spacing height={1} />
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque
            euismod, nisi eu consectetur consectetur, nisl
          </Typography>
          <Spacing height={2} />
          <Button onClick={() => handleClick()}>Close</Button>
        </Container>
      </Snackbar>
    </>
  );
};
