// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";
import contrast from "../../utils/contrast";
import opacity from "../../utils/opacity";
import { IconButtonProps } from "./IconButton.types";

export const IconButton: React.FC<IconButtonProps> = (props) => {
  const theme = useTheme();
  const {
    groupVariant = null,
    groupSize = null,
    groupShape = null,
    groupBackgroundColor = null,
    groupHoverBackgroundColor = null,
    groupColor = null,
    color = null,
    label = null,
    children,
    icon = null,
    className = null,
    ...otherProps
  } = props;

  // variant for a button or a group of buttons
  const variant = props.variant
    ? props.variant
    : groupVariant
    ? groupVariant
    : "ghost";

  // size for the button or group of buttons
  const size = props.size ? props.size : groupSize ? groupSize : "medium";

  // shape for the button or group of buttons
  const shape = props.shape
    ? props.shape
    : groupShape
    ? groupShape
    : theme.layout.defaultShape;

  // background color for the button or group  of buttons
  const backgroundColor = props.backgroundColor
    ? props.backgroundColor
    : groupBackgroundColor
    ? groupBackgroundColor
    : "primary";

  // hover background color for the button or group  of buttons
  const hoverBackgroundColor = props.hoverBackgroundColor
    ? props.hoverBackgroundColor
    : groupHoverBackgroundColor
    ? groupHoverBackgroundColor
    : null;

  // color for the button or group of buttons
  const textColor = props.color ? props.color : groupColor ? groupColor : null;

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
            : opacity(backgroundColor, 80)
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
    if (textColor) return `color: ${textColor};`; // if value is defined by props

    switch (variant) {
      case "contained":
        return `color: ${contrast(
          isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor
        )};
        stroke: ${contrast(
          isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor
        )};`;
      case "outlined":
        return `color: ${
          isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor
        };
        stroke: ${
          isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor
        };`;
      case "ghost":
        return `color: ${
          isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor
        };
        stroke: ${
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
          textColor
            ? textColor
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
          textColor
            ? textColor
            : hoverBackgroundColor
            ? hoverBackgroundColor
            : isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor
        };`;
      case "ghost":
        return `color: ${
          textColor
            ? opacity(textColor, 90)
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
        return "font-size: 26px;";
      case "large":
        return "font-size: 22px;";
      case "small":
        return "font-size: 14px;";
      case "mini":
        return "font-size: 10px;";
      case "medium":
      default:
        return "font-size: 18px;";
    }
  }

  function handlePadding() {
    switch (size) {
      case "xlarge":
        return "padding: 10px; ";
      case "large":
        return "padding: 8px;";
      case "small":
        return "padding: 4px;";
      case "mini":
        return "padding: 2px;";
      case "medium":
      default:
        return "padding: 6px;";
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
      data-testid="Wps-IconButton"
      className={classnames("Wps-IconButton", className)}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-IconButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-sizing: border-box;
          outline: currentcolor none 0px;
          margin: 0px;
          cursor: pointer;
          user-select: none;
          vertical-align: middle;
          /* appearance: none; */
          text-decoration: none;
          text-align: center;
          /* flex: 0 0 auto; */
          border-radius: 50%;
          overflow: visible;
          min-width: max-content;

          ${handleBackgroundColor()}
          ${handleTextColor()}
          border-style: solid;
          border-width: 1px;
          ${handleBorderColor()}

          font-family: ${theme.font.label.fontFamily};
          font-weight: ${theme.font.label.fontWeight};
          line-height: ${theme.font.label.lineHeight};
          text-transform: ${theme.font.label.textTransform};
          ${handleFontSize()}

          ${handleShape()}
          ${handlePadding()}
        
          transition: all .5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .Wps-IconButton:hover {
          ${handleBackgroundColorHover()}
          ${handleTextColorHover()}
          ${handleBorderColorHover()}
        }

        .Wps-IconButton:disabled,
        .Wps-IconButton[disabled] {
          ${handleDisabledColors()}
          cursor: not-allowed;
        }
      `}</style>
      {children}
      {icon}
    </button>
  );
};
