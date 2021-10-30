// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";
import { ContainerProps } from "./Container.types";
import opacity from "../../utils/opacity";

export const Container: React.FC<ContainerProps> = (props) => {
  const theme = useTheme();
  const {
    children,
    backgroundColor = "background",
    hoverBackgroundColor = null,
    clickable = false,
    className = null,
    shape = "round",
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

  function handleShape() {
    switch (shape) {
      case "round":
        return "border-radius: 1.5em;";
      case "rounded":
        return "border-radius: 0.7em;";
      case "square":
        return "border-radius: 0em;";
      default:
        return "border-radius: 0.7em;";
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

  function handleShadowColor() {
    switch (backgroundColor) {
      case "highlight":
        return theme.palette.basic.shadow;
      case "background":
        return theme.palette.basic.shadow;
      case "shade":
        return theme.palette.basic.shadow;
      default:
        return isThemePalette(backgroundColor)
          ? theme.palette[backgroundColor].shadow
          : opacity(backgroundColor, 24);
    }
  }

  return (
    <div
      data-testid="Wps-Container"
      className={classnames("Wps-Container", className)}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-Container {
          background: ${handleBackgroundColor()};
          padding: ${theme.layout.padding};
          ${handleShape()}
          box-shadow: 0px 16px 32px ${handleShadowColor()};
          ${clickable ? "cursor: pointer;" : ""}
          transition: all 250ms ease 0ms;
        }
        .Container:hover {
          background: ${handleHoverBackgroundColor()};
        }
      `}</style>
      {children}
    </div>
  );
};
