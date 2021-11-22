// Generated with util/create-component.js
import React from "react";
import { Snackbar } from "./Snackbar";
import { Container } from "../Container";
import { Typography } from "../Typography";
import { Spacing } from "../Spacing";
import { Button } from "../Button";

export default {
  title: "Prototypes/Snackbar",
};

export const SideBar = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <Button onClick={() => setOpen(!open)}>Open</Button>
      <Snackbar
        id="sidebar"
        open={open}
        position="center right"
        spacing={0}
        animation="fadeInRight"
        backdrop
        fullHeight
        onBackdropClick={() => setOpen(false)}
      >
        <Container shape="square" fullHeight>
          <Typography>This is a snackbar</Typography>
        </Container>
      </Snackbar>
    </>
  );
};
