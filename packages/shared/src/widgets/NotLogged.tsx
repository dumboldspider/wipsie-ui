import React from "react";
import { useTheme, Spacing, Typography, Link, responsive } from "@wipsie/ui";
import { linkPattern } from "../configs/linkPattern";
import { NoUserIcon } from "../icons/NoUserIcon";

export type NotLoggedProps = {
  linkComponent?: any;
  textColor?: string;
  iconColor?: string;
  iconAccentColor?: string;
  redirectTo?: string;
  label?: string;
  iconSize?: string;
};

export function NotLogged({
  linkComponent = Link,
  textColor = null,
  iconAccentColor,
  iconColor,
  redirectTo,
  label = "Sign In",
  iconSize = responsive(20, 30),
}: NotLoggedProps) {
  const theme = useTheme();

  const LinkComponent = linkComponent;

  return (
    <Typography variant="h5">
      <LinkComponent
        href={linkPattern({
          type: "loginPageRedirect",
          data: {
            redirectTo: redirectTo || window?.location?.href,
          },
        })}
        color={textColor || theme.palette.text}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NoUserIcon
          color={iconColor || theme.palette.primary[500]}
          accent={iconAccentColor || theme.palette.primary[700]}
          width={iconSize}
        />
        <Spacing width={1} />
        {label}
      </LinkComponent>
    </Typography>
  );
}
