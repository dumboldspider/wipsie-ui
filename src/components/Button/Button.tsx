import React, { useEffect } from "react";
import clsx from "clsx";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";
import contrast from "../../utils/contrast";
import opacity from "../../utils/opacity";
import ButtonTypes from "./Button.types";

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonTypes> = (props) => {
  const theme = useTheme();
  const {
    color = null,
    variant = "contained",
    backgroundColor = "primary",
    hoverBackgroundColor = null,
    size = "medium",
    shape = "round",
    label = null,
    children,
    ...otherProps
  } = props;

  function handleBackgroundColor() {
    switch (variant) {
      case "contained":
        return `background: ${
          isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor
        };`;
      case "outlined":
        return `background: ${
          isThemePalette(backgroundColor)
            ? opacity(theme.palette[backgroundColor][500], 32)
            : opacity(backgroundColor, 32)
        };`;
      case "ghost":
        return "background: transparent;";
      default:
        return "";
    }
  }

  function handleBackgroundColorHover() {
    if (hoverBackgroundColor) return `background: ${hoverBackgroundColor};`; // if value is defined by props
    switch (variant) {
      case "contained":
        return `background: ${
          isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][300]
            : backgroundColor
        };`;
      case "outlined":
        return `background: ${
          isThemePalette(backgroundColor)
            ? opacity(theme.palette[backgroundColor][500], 16)
            : opacity(backgroundColor, 16)
        };`;
      case "ghost":
        return "background: transparent;";
      default:
        return "";
    }
  }

  function handleBorderColor() {
    switch (variant) {
      case "contained":
        return `border-color: ${
          isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor
        };`;
      case "outlined":
        return `border-color: ${
          isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor
        };`;
      case "ghost":
        return "border-color: transparent;";
      default:
        return "";
    }
  }

  function handleBorderColorHover() {
    switch (variant) {
      case "contained":
        return `border-color: ${
          isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][300]
            : backgroundColor
        };`;
      case "outlined":
        return `border-color: ${
          isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor
        };`;
      case "ghost":
        return "border-color: transparent;";
      default:
        return "";
    }
  }

  function handleTextColor() {
    if (color) return `color: ${color};`; // if value is defined by props

    switch (variant) {
      case "contained":
        return `color: ${contrast(
          isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor
        )};`;
      case "outlined":
        return `color: ${
          isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor
        };`;
      case "ghost":
        return `color: ${
          isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor
        };`;
      default:
        return "";
    }
  }

  function handleTextColorHover() {
    if (color) return `color: ${color};`; // if value is defined by props

    switch (variant) {
      case "contained":
        return `color: ${contrast(
          isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor
        )};`;
      case "outlined":
        return `color: ${
          isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor
        };`;
      case "ghost":
        return `color: ${
          isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][300]
            : backgroundColor
        };`;
      default:
        return "";
    }
  }

  function handleFontSize() {
    switch (size) {
      case "large":
        return "font-size: 1.1em;";
      case "medium":
        return "font-size: 0.9em;";
      case "small":
        return "font-size: 0.7em;";
      default:
        return "";
    }
  }

  function handlePadding() {
    switch (size) {
      case "large":
        return "padding: 1.2em;";
      case "medium":
        return "padding: 1em;";
      case "small":
        return "padding: 0.8em;";
      default:
        return "padding: 1em;";
    }
  }

  function handleShape() {
    switch (shape) {
      case "round":
        return "border-radius: 10em;";
      case "rounded":
        return "border-radius: 0.7em;";
      case "square":
        return "border-radius: 0em;";
      default:
        return "border-radius: 0.7em;";
    }
  }

  return (
    <button data-testid="Button" className={clsx("Button")} {...otherProps}>
      {label}
      {children}

      {/* @ STYLES */}
      <style jsx>{`
        .Button {
          ${handleBackgroundColor()}
          ${handleTextColor()}

          font-family: ${theme.font.label.fontFamily};
          font-weight: ${theme.font.label.fontWeight};
          line-height: ${theme.font.label.lineHeight};
          text-transform: ${theme.font.label.textTransform};
          ${handleFontSize()}

          border-style: solid;
          border-width: 2px;
          ${handleBorderColor()}
          ${handleShape()}

          ${handlePadding()}

          display: inline-block;
          position: relative;
          cursor: pointer;
          overflow: hidden;

          transition: all 250ms ease 0ms;
        }
        .Button:hover {
          ${handleBackgroundColorHover()}
          ${handleTextColorHover()}
          ${handleBorderColorHover()}
        }
      `}</style>
    </button>
  );
};
export default Button;
