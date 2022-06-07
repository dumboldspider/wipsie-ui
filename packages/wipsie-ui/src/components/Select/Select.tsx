// Generated with util/create-component.js
import React, { Children, useRef, useState } from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";
import contrast from "../../utils/contrast";
import opacity from "../../utils/opacity";
import { SelectProps } from "./Select.types";

export const Select: React.FC<SelectProps> = (props) => {
  const theme = useTheme();

  const {
    startAdornment = null,
    endAdornment = "▾",
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
    placeholder = "Select...",
    error = false,
    success = false,
    helperText = null,
    wrapperProps = null,
    inputProps = null,
    value = null,
    onChange = null,
    children,
    className,
    name = "select",
    id = "",
    maxHeight = 200,
    ...otherProps
  } = props;

  const options = Children.toArray(children)
    .filter((child: any) => child.type === "option")
    .map((child: any) => child.props);

  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options.find((option) => option.value == value) || null
  );
  const [selectedValue, setSelectedValue] = useState(
    selectedOption ? selectedOption.value : null
  );
  const selectRef = useRef(null);

  function handleValue(value: any) {
    return value ? (typeof value === "number" ? `${value}px` : value) : "0px";
  }

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

  function handleOptionsBackground() {
    return `background: ${theme.palette.highlight};`;
  }

  function handleOptionsTextColor() {
    return `color: ${theme.palette.text}; stroke: ${theme.palette.text};`;
  }

  function handleOptionsBorderColor() {
    return `border-color: ${theme.palette.shade};`;
  }

  function handleOptionsShape() {
    switch (shape) {
      case "round":
        return "border-radius: 1em;";
      case "rounded":
        return "border-radius: 0.7em;";
      case "square":
        return "border-radius: 0em;";
      default:
        return "border-radius: 0.7em;";
    }
  }

  function handleDisabledColors() {
    if (!disabled) return "";
    switch (variant) {
      case "contained":
        return `background: ${opacity(theme.palette.shade, 100)};
        color: ${opacity(theme.palette.text, 40)};
        stroke: ${opacity(theme.palette.text, 40)};
        border-color: ${opacity(theme.palette.shade, 100)};
        `;
      case "outlined":
        return `background: ${opacity(theme.palette.shade, 100)};
        color: ${opacity(theme.palette.text, 40)};
        stroke: ${opacity(theme.palette.text, 40)};
        border-color: ${opacity(theme.palette.text, 40)};`;
      case "ghost":
        return `background: ${"transparent"};
        color: ${opacity(theme.palette.text, 50)};
        stroke: ${opacity(theme.palette.text, 50)};
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
        )};
        stroke: ${contrast(
          isThemePalette(color) ? theme.palette[color][500] : color
        )};`;
      case "outlined":
      case "ghost":
      default:
        return `color: ${
          isThemePalette(color) ? theme.palette[color][500] : color
        };
        stroke: ${isThemePalette(color) ? theme.palette[color][500] : color};`;
    }
  }

  function handlePlaceholderColor() {
    if (textColor) return `color: ${opacity(textColor, 80)};`; // if value is defined by props
    if (color === "basic" || disabled)
      return `color: ${theme.palette.subtext};`; // if value is basic

    switch (variant) {
      case "contained":
        return `color: ${
          isThemePalette(color) ? theme.palette[color][100] : color
        };`;
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
        return `color: ${
          isThemePalette(color) ? theme.palette[color][500] : color
        };`;
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
        return "padding: 12px 16px;";
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
        return "border-radius: 2em;";
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
      data-testid="Wps-SelectWrapper"
      className={classnames("Wps-SelectWrapper")}
      {...wrapperProps}
      onClick={() => {
        if (!disabled) {
          setVisible(!visible);
        }
      }}
    >
      <style jsx>{`
        .Wps-SelectWrapper {
          position: relative;
          display: inline-block;
          height: fit-content;
          width: ${fullWidth ? "100%" : "max-content"};
          transition: all 250ms ease 0ms;
        }
      `}</style>

      <div className="Wps-SelectedValue">
        {startAdornment && (
          <span style={{ paddingRight: 5 }}>{startAdornment}</span>
        )}

        {selectedOption?.children || placeholder}

        {endAdornment && <span style={{ paddingLeft: 5 }}>{endAdornment}</span>}
      </div>

      <style jsx>{`
        .Wps-SelectedValue {
          width: 100%;
          height: 100%;
          cursor: ${disabled ? "not-allowed" : "pointer"};
          transition: all 250ms ease 0ms;
          border-style: solid;
          border-width: 2px;
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          ${handleBorderColor()}
          ${handleShape()}
          ${handleBackgroundColor()}
          ${handleFontSize()}
          ${handleAlign()}
          ${handlePadding()}
          ${selectedValue ? handleTextColor() : handlePlaceholderColor()}
          ${handleDisabledColors()}
        }
      `}</style>

      <select
        name={name}
        id={id}
        className="Wps-Select"
        data-testid="Wps-Select"
        ref={selectRef}
        value={selectedValue}
        disabled={disabled}
        required={required}
        {...inputProps}
        {...otherProps}
      >
        {options.map((option) => (
          <option key={option.value} {...option} />
        ))}
      </select>

      <style jsx>{`
        .Wps-Select {
          display: none;
        }
      `}</style>

      {visible && (
        <div className="Wps-SelectItems">
          {options.map((option) => (
            <div
              key={option.value}
              className="Wps-SelectItem"
              onClick={() => {
                if (!disabled) {
                  setSelectedOption(option);
                  setSelectedValue(option.value);
                  onChange && onChange(option.value);
                }
                setVisible(false);
              }}
              {...option}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        .Wps-SelectItems {
          position: absolute;
          top: 100%;
          left: 0;
          border-width: 1px;
          border-style: solid;
          ${handleOptionsBackground()}
          ${handleOptionsBorderColor()}
          ${handleOptionsShape()}
          max-height: ${handleValue(maxHeight)};
          overflow-y: auto;
          z-index: 1;
        }

        .Wps-SelectItem {
          width: 100%;
          height: 100%;
          padding: 10px;
          border-bottom-width: 1px;
          border-bottom-style: solid;
          ${handleFontSize()}
          ${handlePadding()}
          ${handleOptionsTextColor()}
          ${handleOptionsBorderColor()}
          cursor: pointer;
        }

        .Wps-SelectItem:last-child {
          border-bottom-width: 0px;
          border-bottom-style: none;
        }

        .Wps-Wps-SelectItem:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <div className="Wps-Helper">{helperText}</div>
      <style jsx>{`
        .Wps-Helper {
          position: absolute;
          top: 100%;
          left: 0;
          font-size: 12px;
          margin-top: 4px;
          ${handleHelperColor()}
        }
      `}</style>
    </div>
  );
};
