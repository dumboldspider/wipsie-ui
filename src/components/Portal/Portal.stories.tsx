// Generated with util/create-component.js
import React from "react";
import { Portal } from "./Portal";
import { Flex } from "../Flex";
import { Animated } from "../Animated";
import { Backdrop } from "../Backdrop";
import { Container } from "../Container";
import { Box } from "../Box";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { Link } from "../Link";
import { Spacing } from "../Spacing";
import { Fixed } from "../Fixed";
import { Modal } from "../Modal";
import { IconButton } from "../IconButton";
import useTheme from "../../hooks/useTheme";

import { CloseOutlined } from "@ant-design/icons";

export default {
  title: "Prototypes/Portal",
};

export const AsModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Button onClick={() => handleClick()}>Open</Button>
      <Modal
        id="modal"
        open={isOpen}
        duration={200}
        onBackdropClick={handleClick}
        onEscapeKeyDown={handleClick}
      >
        <Container maxWidth="350px" width="100%">
          <Fixed type="absolute" position="top right" spacing={1}>
            <IconButton backgroundColor="text" onClick={() => handleClick()}>
              <CloseOutlined />
            </IconButton>
          </Fixed>

          <Typography variant="h2">Hello</Typography>
          <Spacing height={1} />
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque
            euismod, nisi eu consectetur consectetur, nisl
          </Typography>
          <Spacing height={2} />
          <Button onClick={() => handleClick()}>Close</Button>
        </Container>
      </Modal>
    </>
  );
};
export const NoPortalModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Button onClick={() => handleClick()}>Open</Button>
      <Modal
        id="modal"
        open={isOpen}
        duration={200}
        onBackdropClick={handleClick}
        onEscapeKeyDown={handleClick}
        noPortal
      >
        <Container maxWidth="350px" width="100%">
          <Fixed type="absolute" position="top right" spacing={1}>
            <IconButton backgroundColor="text" onClick={() => handleClick()}>
              <CloseOutlined />
            </IconButton>
          </Fixed>

          <Typography variant="h2">Hello</Typography>
          <Spacing height={1} />
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque
            euismod, nisi eu consectetur consectetur, nisl
          </Typography>
          <Spacing height={2} />
          <Button onClick={() => handleClick()}>Close</Button>
        </Container>
      </Modal>
    </>
  );
};

export const FullModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Button onClick={() => handleClick()}>Open</Button>
      <Modal
        id="modal"
        open={isOpen}
        duration={300}
        animation="fadeInBottom"
        onEscapeKeyDown={handleClick}
      >
        <Container
          shape="square"
          style={{ height: "100vh", width: "100vw" }}
          fullWidth
        >
          <Fixed type="absolute" position="top right" spacing={1}>
            <IconButton backgroundColor="text" onClick={() => handleClick()}>
              <CloseOutlined />
            </IconButton>
          </Fixed>

          <Typography variant="h2">Hello</Typography>
          <Spacing height={1} />
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque
            euismod, nisi eu consectetur consectetur, nisl
          </Typography>
          <Spacing height={2} />
          <Button onClick={() => handleClick()}>Close</Button>
        </Container>
      </Modal>
    </>
  );
};
