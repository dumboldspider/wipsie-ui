import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";
import contrast from "../../utils/contrast";
import opacity from "../../utils/opacity";
import { ButtonProps } from "./Button.types";

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = (props) => {
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
    icon = null,
    startIcon = null,
    endIcon = null,
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
        return `background: ${"transparent"};`;
      case "ghost":
        return "background: transparent;";
      default:
        return "";
    }
  }

  function handleBackgroundColorHover() {
    switch (variant) {
      case "contained":
        return `background: ${
          hoverBackgroundColor
            ? hoverBackgroundColor
            : isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][300]
            : opacity(backgroundColor, 80)
        };`;
      case "outlined":
        return `background: ${
          hoverBackgroundColor
            ? opacity(hoverBackgroundColor, 8)
            : isThemePalette(backgroundColor)
            ? opacity(theme.palette[backgroundColor][500], 8)
            : opacity(backgroundColor, 8)
        };`;
      case "ghost":
        return `background: ${
          hoverBackgroundColor
            ? opacity(hoverBackgroundColor, 8)
            : isThemePalette(backgroundColor)
            ? opacity(theme.palette[backgroundColor][500], 8)
            : opacity(backgroundColor, 8)
        };`;
      default:
        return "";
    }
  }

  function handleDisabledColors() {
    switch (variant) {
      case "contained":
        return `background: ${opacity(theme.palette.shade, 100)};
        color: ${opacity(theme.palette.text, 40)};
        border-color: ${opacity(theme.palette.shade, 100)};`;
      case "outlined":
        return `background: ${opacity(theme.palette.shade, 100)};
        color: ${opacity(theme.palette.text, 40)};
        border-color: ${opacity(theme.palette.text, 40)};`;
      case "ghost":
        return `background: ${"transparent"};
        color: ${opacity(theme.palette.text, 50)};
        border-color: ${"transparent"};`;
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
          hoverBackgroundColor
            ? hoverBackgroundColor
            : isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][300]
            : backgroundColor
        };`;
      case "outlined":
        return `border-color: ${
          hoverBackgroundColor
            ? hoverBackgroundColor
            : isThemePalette(backgroundColor)
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
    switch (variant) {
      case "contained":
        return `color: ${
          color
            ? color
            : hoverBackgroundColor
            ? contrast(
                isThemePalette(hoverBackgroundColor)
                  ? theme.palette[hoverBackgroundColor][500]
                  : hoverBackgroundColor
              )
            : contrast(
                isThemePalette(backgroundColor)
                  ? theme.palette[backgroundColor][500]
                  : backgroundColor
              )
        };`;
      case "outlined":
        return `color: ${
          color
            ? color
            : hoverBackgroundColor
            ? hoverBackgroundColor
            : isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor
        };`;
      case "ghost":
        return `color: ${
          color
            ? opacity(color, 90)
            : isThemePalette(backgroundColor)
            ? opacity(theme.palette[backgroundColor][500], 90)
            : opacity(backgroundColor, 90)
        };`;
      default:
        return "";
    }
  }

  function handleFontSize() {
    switch (size) {
      case "xlarge":
        return "font-size: 1.1em;";
      case "large":
        return "font-size: 1em;";
      case "small":
        return "font-size: 0.7em;";
      case "mini":
        return "font-size: 0.6em;";
      case "medium":
      default:
        return "font-size: 0.9em;";
    }
  }

  function handlePadding() {
    switch (size) {
      case "xlarge":
        return "padding: 0.95em;";
      case "large":
        return "padding: 0.8em;";
      case "small":
        return "padding: 0.7em;";
      case "mini":
        return "padding: 0.6em;";
      case "medium":
      default:
        return "padding: 0.7em;";
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
    <button
      data-testid="Button"
      className={classnames("Button")}
      {...otherProps}
    >
      {startIcon && <span style={{ paddingRight: 5 }}>{startIcon}</span>}

      {icon && <span style={{}}>{icon}</span>}

      {label}
      {endIcon && <span style={{ paddingLeft: 5 }}>{endIcon}</span>}

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

          position: relative;
          cursor: pointer;
          overflow: hidden;
          display: flex;
          align-items: center;
          height: fit-content;

          transition: all 250ms ease 0ms;
        }
        .Button:hover {
          ${handleBackgroundColorHover()}
          ${handleTextColorHover()}
          ${handleBorderColorHover()}
        }

        .Button:disabled,
        .Button[disabled] {
          ${handleDisabledColors()}
          cursor: not-allowed;
        }
      `}</style>
    </button>
  );
};
export default Button;
