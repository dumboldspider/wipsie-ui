import React, { useState, useEffect } from "react";
import {
  useTheme,
  Box,
  Spacing,
  Typography,
  Link,
  responsive,
} from "@wipsie/ui";
import { serviceLinks, NoUserIcon } from "../";

export function NotLogged({ LinkComponent = Link, color = null }) {
  const theme = useTheme();

  return (
    <Typography variant="h5">
      <LinkComponent
        href={serviceLinks.auth}
        color={color || theme.palette.text}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NoUserIcon
          color={theme.palette.primary[500]}
          accent={theme.palette.primary[700]}
          width={responsive(20, 30)}
        />
        <Spacing width={1} />
        Sign In
      </LinkComponent>
    </Typography>
  );
}
