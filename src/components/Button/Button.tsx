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
export const Button: React.FC<ButtonProps> = (props) => {
  const theme = useTheme();
  const {
    chip = false,
    active = null,
    disabled = false,
    groupVariant = null,
    groupSize = null,
    groupShape = null,
    groupBackgroundColor = null,
    groupHoverBackgroundColor = null,
    groupColor = null,
    groupHoverColor = null,
    label = null,
    children,
    icon = null,
    startIcon = null,
    endIcon = null,
    fullWidth = false,
    align = "center",
    color = null,
    hoverColor = null,
    className = null,
    ...otherProps
  } = props;

  // variant for a button or a group of buttons
  const variant = props.variant
    ? props.variant
    : groupVariant
    ? groupVariant
    : "contained";

  // size for the button or group of buttons
  const size = props.size ? props.size : groupSize ? groupSize : "medium";

  // shape for the button or group of buttons
  const shape = props.shape ? props.shape : groupShape ? groupShape : "round";

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

  // color for the button or group of buttons on hover
  const hoverTextColor = props.hoverColor
    ? props.hoverColor
    : groupHoverColor
    ? groupHoverColor
    : null;

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
    switch (variant) {
      case "contained":
        return textColor
          ? `color: ${
              isThemePalette(textColor)
                ? theme.palette[textColor][500]
                : textColor
            };`
          : `color: ${contrast(
              isThemePalette(backgroundColor)
                ? theme.palette[backgroundColor][500]
                : backgroundColor
            )};`;
      case "outlined":
        return textColor
          ? `color: ${
              isThemePalette(textColor)
                ? theme.palette[textColor][500]
                : textColor
            };`
          : `color: ${
              isThemePalette(backgroundColor)
                ? theme.palette[backgroundColor][500]
                : backgroundColor
            };`;
      case "ghost":
        return textColor
          ? `color: ${
              isThemePalette(textColor)
                ? theme.palette[textColor][500]
                : textColor
            };`
          : `color: ${
              isThemePalette(backgroundColor)
                ? theme.palette[backgroundColor][500]
                : backgroundColor
            };`;
      default:
        return "";
    }
  }

  function handleTextColorHover() {
    if (hoverTextColor) return `color: ${hoverTextColor};`; // if value is defined by props

    switch (variant) {
      case "contained":
        return `color: ${
          hoverTextColor
            ? isThemePalette(hoverTextColor)
              ? theme.palette[hoverTextColor][500]
              : hoverTextColor
            : textColor
            ? isThemePalette(textColor)
              ? theme.palette[textColor][500]
              : textColor
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
          hoverTextColor
            ? isThemePalette(hoverTextColor)
              ? theme.palette[hoverTextColor][500]
              : hoverTextColor
            : textColor
            ? isThemePalette(textColor)
              ? theme.palette[textColor][500]
              : textColor
            : hoverBackgroundColor
            ? hoverBackgroundColor
            : isThemePalette(backgroundColor)
            ? theme.palette[backgroundColor][500]
            : backgroundColor
        };`;
      case "ghost":
        return `color: ${
          hoverTextColor
            ? isThemePalette(hoverTextColor)
              ? theme.palette[hoverTextColor][500]
              : hoverTextColor
            : textColor
            ? opacity(
                isThemePalette(textColor)
                  ? theme.palette[textColor][500]
                  : textColor,
                90
              )
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
        return "font-size: 18px;";
      case "large":
        return "font-size: 16px;";
      case "small":
        return "font-size: 12px;";
      case "mini":
        return "font-size: 10px;";
      case "medium":
      default:
        return "font-size: 14px;";
    }
  }

  function handlePadding() {
    switch (size) {
      case "xlarge":
        return "padding: 12px 16px; ";
      case "large":
        return "padding: 10px 14px;";
      case "small":
        return "padding: 6px 8px;";
      case "mini":
        return "padding: 4px 6px;";
      case "medium":
      default:
        return "padding: 8px 10px;";
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

  function handleAlign() {
    switch (align) {
      case "left":
        return "justify-content: flex-start;";
      case "right":
        return "justify-content: flex-end;";
      case "spaced":
        return "justify-content: space-between;";
      case "center":
      default:
        return "justify-content: center;";
    }
  }

  return (
    <button
      data-testid="Wps-Button"
      className={classnames(
        "Wps-Button",
        active !== null ? (active ? "active" : "disabled") : "",
        className
      )}
      disabled={disabled}
      {...otherProps}
    >
      {startIcon && <span style={{ paddingRight: 5 }}>{startIcon}</span>}

      {icon && <span style={{}}>{icon}</span>}
      {label}
      {children}

      {endIcon && <span style={{ paddingLeft: 5 }}>{endIcon}</span>}

      {/* @ STYLES */}
      <style jsx>{`
        .Wps-Button {
          ${handleBackgroundColor()}
          ${handleTextColor()}
          border-style: solid;
          border-width: 2px;
          ${handleBorderColor()}

          font-family: ${theme.font.label.fontFamily};
          font-weight: ${theme.font.label.fontWeight};
          line-height: ${theme.font.label.lineHeight};
          text-transform: ${theme.font.label.textTransform};

          ${handleFontSize()}
          ${handleShape()}
          ${handlePadding()}

          position: relative;
          ${!chip ? "cursor: pointer;" : ""}
          overflow: hidden;
          display: flex;
          align-items: center;
          ${handleAlign()}

          height: fit-content;
          width: ${fullWidth ? "100%" : "max-content"};

          transition: all 250ms ease 0ms;
        }
        .Wps-Button:hover,
        .Wps-Button.active {
          ${!chip && handleBackgroundColorHover()}
          ${!chip && handleTextColorHover()}
          ${!chip && handleBorderColorHover()}
        }

        .Wps-Button:disabled,
        .Wps-Button[disabled],
        .Wps-Button.disabled {
          ${handleDisabledColors()}
          cursor: ${disabled ? "not-allowed" : "pointer"};
        }
      `}</style>
    </button>
  );
};
