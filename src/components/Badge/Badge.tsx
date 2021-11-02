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
    showZero = false,
    bordered = false,
    borderColor = theme.palette.background,
    dot = false,
    dotSize = "10px",
    color = "secondary",
    textColor = null,
    tolerance = theme.layout.spacingUnit,
    wrapperProps,
    invisible = false,
    position = "top right",
    className = null,
    icon = null,
    ...otherProps
  } = props;

  function handleColor() {
    return `background: ${
      isThemePalette(color) ? theme.palette[color][500] : color
    };`;
  }

  function handleBorderColor() {
    if (!bordered) return "border: none;";

    if (borderColor) return `border: solid 1px ${borderColor};`; // if value is defined by props
    return `border: solid 1px: ${contrast(
      isThemePalette(borderColor)
        ? theme.palette[borderColor][500]
        : borderColor
    )};`;
  }

  function handleTextColor() {
    if (textColor) return `color: ${textColor};`; // if value is defined by props
    return `color: ${contrast(
      isThemePalette(color) ? theme.palette[color][500] : color
    )};`;
  }

  function handleDotSize() {
    if (dot) {
      return `min-height: ${dotSize}; max-height: ${dotSize}; min-width: ${dotSize};`;
    } else {
      return `min-height: 16px; max-height: 16px; min-width: 16px;`;
    }
  }

  function handlePosition() {
    let toleranceUnit = tolerance;

    if (position.indexOf(" ") >= 0) {
      const [vertical, horizontal] = position.split(" ");

      let verticalCss = "";
      switch (vertical) {
        case "center":
          verticalCss = `top: calc(50% - ${toleranceUnit}px); bottom: calc(0% - ${toleranceUnit}px);`;
          break;
        case "bottom":
          verticalCss = `bottom: calc(0% - ${toleranceUnit}px);`;
          break;
        default:
        case "top":
          verticalCss = `top: calc(0% - ${toleranceUnit}px);`;
          break;
      }

      let horizontalCss = "";
      switch (horizontal) {
        case "left":
          horizontalCss = `left: calc(0% - ${toleranceUnit}px);`;
          break;
        default:
        case "right":
          horizontalCss = `right: calc(0% - ${toleranceUnit}px);`;
          break;
      }
      return verticalCss + horizontalCss;
    } else {
      switch (position) {
        case "top":
          return `top: calc(0% - ${toleranceUnit}px);`;
        case "center":
          return `top: calc(50% - ${toleranceUnit}px); bottom: calc(0% - ${toleranceUnit}px);`;
        case "bottom":
          return `bottom: calc(0% - ${toleranceUnit}px);`;
        case "left":
          return `left: calc(0% - ${toleranceUnit}px);`;
        case "right":
          return `right: calc(0% - ${toleranceUnit}px);`;
        default:
          return `top: calc(0% - ${toleranceUnit}px); right: calc(0% - ${toleranceUnit}px);`;
      }
    }
  }

  function handleShowZero() {
    if (showZero) {
      return false;
    } else {
      if (
        (typeof content === "string" && content === "0") ||
        (typeof content === "number" && content === 0)
      ) {
        return true;
      }
    }
    return false;
  }

  function handleStyles() {
    if (
      typeof content === "string" ||
      typeof content === "number" ||
      dot ||
      icon
    ) {
      return `
        font-size: 10px;
        font-weight: bold;
        padding: 4px 4px;
        border-radius: 16px;
        ${handleDotSize()}
        ${handleColor()}
        ${handleBorderColor()}
        ${handleTextColor()}
      `;
    } else {
      return "";
    }
  }

  return (
    <span style={{ position: "relative" }} {...wrapperProps}>
      <span
        data-testid="Wps-Badge"
        className={classnames("Wps-Badge", className)}
        {...otherProps}
      >
        <style jsx>{`
          .Wps-Badge {
            display: ${invisible || handleShowZero() ? "none" : "flex"};
            align-items: center;
            justify-content: center;
            position: absolute;
            z-index: 2;
            ${handleStyles()}
            ${handlePosition()}
          }
        `}</style>
        {content}
        {icon}
      </span>
      {children}
    </span>
  );
};
