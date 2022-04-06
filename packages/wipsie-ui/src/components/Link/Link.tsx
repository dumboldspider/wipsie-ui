// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";
import opacity from "../../utils/opacity";
import { LinkProps } from "./Link.types";

export const Link: React.FC<LinkProps> = (props) => {
  const theme = useTheme();
  const {
    color = "primary",
    component = "a",
    children,
    className = null,
    ...otherProps
  } = props;

  const Component = component ? component : "a";

  function handleColor() {
    if (!color) return `color: ${theme.palette.text};`;
    switch (color) {
      case "text":
        return `color: ${theme.palette.text};`;
      case "subtext":
        return `color: ${theme.palette.subtext};`;
      default:
        return `color: ${
          isThemePalette(color) ? theme.palette[color][500] : color
        };`;
    }
  }
  function handleColorHover() {
    if (!color) return `color: ${theme.palette.text};`;
    switch (color) {
      case "text":
        return `color: ${opacity(theme.palette.text, 50)};`;
      case "subtext":
        return `color: ${opacity(theme.palette.subtext, 50)};`;
      default:
        return `color: ${
          isThemePalette(color)
            ? opacity(theme.palette[color][500], 50)
            : opacity(color, 50)
        };`;
    }
  }

  return (
    <Component
      data-testid="Wps-Link"
      className={classnames("Wps-Link", className)}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-Link {
          ${handleColor()}
          transition: all 250ms ease 0ms;
        }
        .Wps-Link:hover {
          ${handleColorHover()}
        }
      `}</style>
      {children}
    </Component>
  );
};
