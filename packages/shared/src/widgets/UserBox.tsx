import React from "react";
import {
  Box,
  Container,
  Typography,
  Spacing,
  Avatar,
  useTheme,
  Link,
} from "@wipsie/ui";

import { serviceLinks } from "../";

export function UserBox({ LinkComponent = Link, user }) {
  const theme = useTheme();

  return (
    <LinkComponent href={`${serviceLinks.main}/u/${user?.username}`}>
      <Container
        display="flex"
        direction="row"
        align="center"
        justify="start"
        backgroundColor="highlight"
        shape="rounded"
        variant="neumorphic"
        height="fit-content"
        clickable
        elevation={2}
        elevationHover={10}
        wrap="nowrap"
        p={1}
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
