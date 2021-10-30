// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";
import contrast from "../../utils/contrast";
import opacity from "../../utils/opacity";
import { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = (props) => {
  const theme = useTheme();
  const {
    startAdornment = null,
    endAdornment = null,
    fullWidth = false,
    color = "basic",
    textColor = null,
    borderColor = null,
    size = "medium",
    shape = "round",
    variant = "contained",
    align = "spaced",
    required = false,
    disabled = false,
    error = false,
    success = false,
    helperText = null,
    wrapperProps = null,
    inputProps = null,
    children,
    className,
    ...otherProps
  } = props;

  function handleBackgroundColor() {
    if (error) {
      switch (variant) {
        case "ghost":
          return `background: ${opacity(theme.palette.danger[500], 20)};`;
      }
    }
    if (success) {
      switch (variant) {
        case "ghost":
          return `background: ${opacity(theme.palette.success[500], 20)};`;
      }
    }

    switch (variant) {
      case "contained":
        return `background: ${
          isThemePalette(color) ? theme.palette[color][500] : color
        };`;
      case "outlined":
        return `background: ${"transparent"};`;
      case "ghost":
        return `background: ${
          isThemePalette(color)
            ? opacity(theme.palette[color][500], 8)
            : opacity(color, 8)
        };`;
      default:
        return "";
    }
  }

  function handleDisabledColors() {
    if (!disabled) return "";
    switch (variant) {
      case "contained":
        return `background: ${opacity(theme.palette.shade, 100)};
        color: ${opacity(theme.palette.text, 40)};
        border-color: ${opacity(theme.palette.shade, 100)};
        `;
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
    if (error) {
      switch (variant) {
        case "contained":
          return `border-color: ${theme.palette.danger[500]};`;
        case "outlined":
          return `border-color: ${theme.palette.danger[500]};`;
      }
    }
    if (success) {
      switch (variant) {
        case "contained":
          return `border-color: ${theme.palette.success[500]};`;
        case "outlined":
          return `border-color: ${theme.palette.success[500]};`;
      }
    }

    switch (variant) {
      case "contained":
        return `border-color: ${
          isThemePalette(color) ? theme.palette[color][500] : color
        };`;
      case "outlined":
        return `border-color: ${
          isThemePalette(color) ? theme.palette[color][500] : color
        };`;
      case "ghost":
        return "border-color: transparent;";
      default:
        return "";
    }
  }

  function handleTextColor() {
    if (textColor) return `color: ${textColor};`; // if value is defined by props
    if (color === "basic") return `color: ${theme.palette.text};`; // if value is basic

    switch (variant) {
      case "contained":
        return `color: ${contrast(
          isThemePalette(color) ? theme.palette[color][500] : color
        )};`;
      case "outlined":
      case "ghost":
      default:
        return `color: ${
          isThemePalette(color) ? theme.palette[color][500] : color
        };`;
    }
  }

  function handlePlaceholderColor() {
    if (color === "basic" || disabled)
      return `color: ${theme.palette.subtext};`; // if value is basic

    switch (variant) {
      case "contained":
        return `color: ${contrast(
          isThemePalette(color) ? theme.palette[color][500] : color
        )};`;
      case "outlined":
      case "ghost":
      default:
        return `color: ${
          isThemePalette(color) ? theme.palette[color][500] : color
        };`;
    }
  }
  function handleHelperColor() {
    if (success) return `color: ${theme.palette.success[500]};`; // if value is basic
    if (error) return `color: ${theme.palette.danger[500]};`; // if value is basic
    if (color === "basic") return `color: ${theme.palette.subtext};`; // if value is basic
    switch (variant) {
      case "contained":
        return `color: ${contrast(
          isThemePalette(color) ? theme.palette[color][500] : color
        )};`;
      case "outlined":
      case "ghost":
      default:
        return `color: ${
          isThemePalette(color) ? theme.palette[color][500] : color
        };`;
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
        return "padding: 12px 0px;";
      case "large":
        return "padding: 10px 0px;";
      case "small":
        return "padding: 6px 0px;";
      case "mini":
        return "padding: 4px 0px;";
      case "medium":
      default:
        return "padding: 8px 0px;";
    }
  }
  function handlePaddingWrapper() {
    switch (size) {
      case "xlarge":
        return "padding: 0px 16px;";
      case "large":
        return "padding: 0px 14px;";
      case "small":
        return "padding: 0px 8px;";
      case "mini":
        return "padding: 0px 6px;";
      case "medium":
      default:
        return "padding: 0px 10px;";
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
    <div
      data-testid="Wps-InputWrapper"
      className={classnames("Wps-InputWrapper")}
      {...wrapperProps}
    >
      <style jsx>{`
        .Wps-InputWrapper {
          ${handleBorderColor()}
          ${handleShape()}
          ${handlePaddingWrapper()}
          ${handleBackgroundColor()}
          border-style: solid;
          border-width: 2px;
          position: relative;
          /* overflow: hidden; */
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          ${handleAlign()}
          height: fit-content;
          width: ${fullWidth ? "100%" : "max-content"};
          transition: all 250ms ease 0ms;
          ${handleTextColor()}
          ${handleDisabledColors()}
        }
      `}</style>
      {startAdornment && (
        <span style={{ paddingRight: 5 }}>{startAdornment}</span>
      )}
      <input
        data-testid="Wps-Input"
        className={classnames("Wps-Input", className)}
        disabled={disabled}
        required={required}
        {...inputProps}
        {...otherProps}
      />
      <style jsx>{`
        .Wps-Input {
          transition: all 250ms ease 0ms;
          background: transparent;
          border: none;
          width: 100%;
          ${handleFontSize()};
          ${handlePadding()}
        }

        .Wps-Input::placeholder {
          ${handlePlaceholderColor()}
        }

        .Wps-Input:disabled,
        .Wps-Input[disabled] {
          cursor: not-allowed;
        }
      `}</style>
      {endAdornment && <span style={{ paddingLeft: 5 }}>{endAdornment}</span>}

      {helperText && <div className="Wps-Helper">{helperText}</div>}
      <style jsx>{`
        .Wps-Helper {
          position: absolute;
          top: 100%;
          left: 0;
          font-size: 12px;
          margin-top: 4px;
          z-index: 1;
          ${handleHelperColor()}s
        }
      `}</style>
    </div>
  );
};
