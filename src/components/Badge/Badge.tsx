// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";
import contrast from "../../utils/contrast";
import { BadgeProps } from "./Badge.types";

export const Badge: React.FC<BadgeProps> = (props) => {
  const theme = useTheme();
  const {
    children,
    content,
    color = "secondary",
    textColor = null,
    wrapperProps,
    position = "top right",
    ...otherProps
  } = props;

  function handleColor() {
    return `background: ${
      isThemePalette(color) ? theme.palette[color][500] : color
    };`;
  }

  function handleTextColor() {
    if (textColor) return `color: ${textColor};`; // if value is defined by props
    return `color: ${contrast(
      isThemePalette(color) ? theme.palette[color][500] : color
    )};`;
  }

  function handlePosition() {
    if (position.indexOf(" ") >= 0) {
      const [vertical, horizontal] = position.split(" ");

      let verticalCss = "";
      switch (vertical) {
        case "center":
          verticalCss = `top: calc(50% - 8px); bottom: calc(0% - 8px);`;
          break;
        case "bottom":
          verticalCss = `bottom: calc(0% - 8px);`;
          break;
        default:
        case "top":
          verticalCss = `top: calc(0% - 8px);`;
          break;
      }

      let horizontalCss = "";
      switch (horizontal) {
        case "left":
          horizontalCss = `left: calc(0% - 8px);`;
          break;
        default:
        case "right":
          horizontalCss = `right: calc(0% - 8px);`;
          break;
      }
      return verticalCss + horizontalCss;
    } else {
      switch (position) {
        case "top":
          return `top: calc(0% - 8px);`;
        case "center":
          return `top: calc(50% - 8px); bottom: calc(0% - 8px);`;
        case "bottom":
          return `bottom: calc(0% - 8px);`;
        case "left":
          return `left: calc(0% - 8px);`;
        case "right":
          return `right: calc(0% - 8px);`;
        default:
          return `top: calc(0% - 8px); right: calc(0% - 8px);`;
      }
    }
  }

  return (
    <div style={{ position: "relative" }} {...wrapperProps}>
      <span
        data-testid="Wps-Badge"
        className={classnames("Wps-Badge")}
        {...otherProps}
      >
        <style jsx>{`
          .Wps-Badge {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            font-size: 10px;
            font-weight: bold;
            padding: 4px 4px;
            min-height: 16px;
            max-height: 16px;
            min-width: 16px;
            border-radius: 16px;
            z-index: 2;

            ${handleColor()}
            ${handleTextColor()}
            ${handlePosition()}
          }
        `}</style>
        {content}
      </span>
      {children}
    </div>
  );
};
