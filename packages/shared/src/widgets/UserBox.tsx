import React from "react";
import {
  Box,
  Container,
  Typography,
  Spacing,
  Avatar,
  useTheme,
  Link,
  ContainerProps,
} from "@wipsie/ui";

import { serviceLinks } from "../configs/serviceLinks";
import { User } from "../types/User.types";

export type UserBoxProps = {
  user: User;
  linkComponent?: any;
  elevation?: number;
  elevationHover?: number;
  p?: number | string;
  shape?: "round" | "rounded" | "square";
  variant?: ContainerProps["variant"];
  backgroundColor?: ContainerProps["backgroundColor"];
};

export function UserBox({
  linkComponent = Link,
  user = null,
  elevation = 2,
  elevationHover = 10,
  p = 1,
  shape = "rounded",
  variant = "neumorphic",
  backgroundColor = "highlight",
}: UserBoxProps) {
  const theme = useTheme();

  const LinkComponent = linkComponent;

  return (
    <LinkComponent href={`${serviceLinks.main}/u/${user?.username}`}>
      <Container
        display="flex"
        direction="row"
        align="center"
        justify="start"
        backgroundColor={backgroundColor}
        shape={shape}
        variant={variant}
        height="fit-content"
        clickable
        elevation={elevation}
        elevationHover={elevationHover}
        wrap="nowrap"
        p={p}
      >
        <Avatar
          src={user?.profile?.avatar}
          alt={user?.name}
          bordered
          backgroundColor={theme.palette.highlight}
        />
        <Spacing width={1} />

        <Box p={1} width="auto" shape="rounded">
          <Typography variant="h6" component="div">
            {user?.name}
          </Typography>
          <Spacing height={0.5} />
          <LinkComponent href={`${serviceLinks.main}/u/${user?.username}`}>
            <Typography
              variant="h6"
              color="subtext"
              component="div"
              style={{ fontWeight: 500 }}
            >
              @{user?.username}
            </Typography>
          </LinkComponent>
        </Box>
      </Container>
    </LinkComponent>
  );
}
