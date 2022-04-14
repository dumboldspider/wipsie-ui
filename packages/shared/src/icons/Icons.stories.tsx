import { Container, Popover, Spacing, Typography } from "@wipsie/ui";
import React from "react";

import {
  WipsieCircleLogo,
  BookIcon,
  CompassIcon,
  HomeIcon,
  ProjectIcon,
  RightCircleIcon,
  ShopIcon,
  NoUserIcon,
} from "../";

export default {
  title: "Shared Components/Icons",
  component: WipsieCircleLogo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Default = () => (
  <>
    <Typography variant="h1">Wipsie Icons</Typography>
    <Spacing height={2} />
    <Container
      display="flex"
      direction="row"
      align="center"
      fullWidth
      variant="neumorphic"
    >
      <IconDisplay name="Wipsie Circle Logo">
        <WipsieCircleLogo />
      </IconDisplay>

      <IconDisplay name="Home Icon">
        <HomeIcon />
      </IconDisplay>

      <IconDisplay name="Project Icon">
        <ProjectIcon />
      </IconDisplay>

      <IconDisplay name="Book Icon">
        <BookIcon />
      </IconDisplay>

      <IconDisplay name="Compass Icon">
        <CompassIcon />
      </IconDisplay>

      <IconDisplay name="Shop Icon">
        <ShopIcon />
      </IconDisplay>

      <IconDisplay name="Right Circle Icon">
        <RightCircleIcon />
      </IconDisplay>

      <IconDisplay name="No User Icon">
        <NoUserIcon />
      </IconDisplay>
    </Container>
  </>
);

const IconDisplay = ({ children, name, ...props }) => {
  return (
    <Container
      display="flex"
      align="center"
      justify="center"
      variant="neumorphic"
      m={2}
      shape="rounded"
      p={1.5}
    >
      <Popover content={name} spacing={1} arrow position="bottom">
        <Typography variant="h1">{children}</Typography>
      </Popover>
    </Container>
  );
};
