// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";
import { BoxProps } from "./Box.types";

export const Box: React.FC<BoxProps> = (props) => {
  const theme = useTheme();
  const {
    children,
    backgroundColor = "background",
    hoverBackgroundColor = null,
    clickable = false,
    ...otherProps
  } = props;

  function handleBackgroundColor() {
    switch (backgroundColor) {
      case "highlight":
        return theme.palette.highlight;
      case "background":
        return theme.palette.background;
      case "shade":
        return theme.palette.shade;
      default:
        return isThemePalette(backgroundColor)
          ? theme.palette[backgroundColor][500]
          : backgroundColor;
    }
  }

  function handleHoverBackgroundColor() {
    if (!hoverBackgroundColor) return handleBackgroundColor();
    switch (hoverBackgroundColor) {
      case "highlight":
        return theme.palette.highlight;
      case "background":
        return theme.palette.background;
      case "shade":
        return theme.palette.shade;
      default:
        return isThemePalette(backgroundColor)
          ? theme.palette[backgroundColor][500]
          : backgroundColor;
    }
  }

  return (
    <div
      data-testid="Wps-Box"
      className={classnames("Wps-Box")}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-Box {
          background: ${handleBackgroundColor()};
          padding: ${theme.layout.padding};
          border-radius: ${theme.layout.radius};
          ${clickable ? "cursor: pointer;" : ""}
          transition: all 250ms ease 0ms;
        }
        .Box:hover {
          background: ${handleHoverBackgroundColor()};
        }
      `}</style>
      {children}
    </div>
  );
};
