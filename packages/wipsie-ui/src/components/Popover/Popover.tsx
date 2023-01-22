import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";
import contrast from "../../utils/contrast";
import { PopoverProps } from "./Popover.types";

import { Backdrop } from "../Backdrop";

export const Popover: React.FC<PopoverProps> = (props) => {
  const theme = useTheme();
  const {
    className,
    children,
    content = "",
    visible = null,
    position = "bottom",
    shape = theme.layout.defaultShape,
    spacing = 0.1,
    hoverSpacing = 1,
    arrow = false,
    arrowSize = 1,
    backgroundColor = theme.palette.text,
    textColor = null,
    backdrop = false,
    onBackdropClick = () => {},
    backdropProps = null,

    width = null,
    height = null,
    minWidth = null,
    maxWidth = null,
    minHeight = null,
    maxHeight = null,

    wrapperProps = {},
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

  function handleTextColor() {
    if (!textColor) return contrast(handleBackgroundColor());

    switch (textColor) {
      case "highlight":
        return theme.palette.highlight;
      case "background":
        return theme.palette.background;
      case "shade":
        return theme.palette.shade;
      default:
        return isThemePalette(textColor)
          ? theme.palette[textColor][500]
          : textColor;
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

  function handlePosition() {
    switch (position) {
      case "top":
        return "bottom: 100%; left: 50%; transform: translateX(-50%);";
      case "left":
        return "right: 100%; top: 50%; transform: translateY(-50%);";
      case "right":
        return "left: 100%; top: 50%; transform: translateY(-50%);";
      case "top left":
        return "bottom: 100%; left: 0%;";
      case "top right":
        return "bottom: 100%; right: 0%;";
      case "bottom left":
        return "top: 100%; left: 0%;";
      case "bottom right":
        return "top: 100%; right: 0%;";
      case "left top":
        return "right: 100%; top: 0%;";
      case "left bottom":
        return "right: 100%; bottom: 0%;";
      case "right top":
        return "left: 100%; top: 0%;";
      case "right bottom":
        return "left: 100%; bottom: 0%;";
      case "bottom":
      default:
        return "top: 100%; left: 50%; transform: translateX(-50%);";
    }
  }

  function handleHoverAnimation() {
    switch (position) {
      case "top":
        return `transform: translate(-50%, -${handleValue(hoverSpacing)});`;
      case "top left":
      case "top right":
        return `transform: translateY(-${handleValue(hoverSpacing)});`;
      case "left":
        return `transform: translate(-${handleValue(hoverSpacing)}, -50%);`;
      case "left top":
      case "left bottom":
        return `transform: translateX(-${handleValue(hoverSpacing)});`;
      case "right":
        return `transform: translate(${handleValue(hoverSpacing)}, -50%);`;
      case "right top":
      case "right bottom":
        return `transform: translateX(${handleValue(hoverSpacing)});`;
      case "bottom":
        return `transform: translate(-50%, ${handleValue(hoverSpacing)});`;
      case "bottom left":
      case "bottom right":
      default:
        return `transform: translateY(${handleValue(hoverSpacing)});`;
    }
  }

  function handleArrow() {
    switch (position) {
      case "top":
      case "top left":
      case "top right":
        return `border-left: ${handleValue(arrowSize)} solid transparent;
                border-right: ${handleValue(arrowSize)} solid transparent;
                border-top: ${handleValue(arrowSize)} solid;
                border-top-color: ${handleBackgroundColor()};
                margin-top: -2px;`;
      case "left":
      case "left top":
      case "left bottom":
        return `border-top: ${handleValue(arrowSize)} solid transparent;
                border-bottom: ${handleValue(arrowSize)} solid transparent;
                border-left: ${handleValue(arrowSize)} solid;
                border-left-color: ${handleBackgroundColor()};
                margin-left: -2px;`;
      case "right":
      case "right top":
      case "right bottom":
        return `border-top: ${handleValue(arrowSize)} solid transparent;
                border-bottom: ${handleValue(arrowSize)} solid transparent;
                border-right: ${handleValue(arrowSize)} solid;
                border-right-color: ${handleBackgroundColor()};
                margin-right: -2px;`;
      case "bottom":
      case "bottom left":
      case "bottom right":
      default:
        return `border-left: ${handleValue(arrowSize)} solid transparent;
                border-right: ${handleValue(arrowSize)} solid transparent;
                border-bottom: ${handleValue(arrowSize)} solid;
                border-bottom-color: ${handleBackgroundColor()};
                margin-bottom: -2px;`;
    }
  }

  function handleArrowPosition() {
    switch (position) {
      case "top":
        return "top: 100%; left: 50%; transform: translateX(-50%);";
      case "left":
        return "left: 100%; top: 50%; transform: translateY(-50%);";
      case "right":
        return "right: 100%; top: 50%; transform: translateY(-50%);";
      case "top left":
        return "top: 100%; left: 0%; transform: translateX(40%);";
      case "top right":
        return "top: 100%; right: 0%; transform: translateX(-40%);";
      case "bottom left":
        return "bottom: 100%; left: 0%; transform: translateX(40%);";
      case "bottom right":
        return "bottom: 100%; right: 0%; transform: translateX(-40%);";
      case "left top":
        return "left: 100%; top: 0%; transform: translateY(40%);";
      case "left bottom":
        return "left: 100%; bottom: 0%; transform: translateY(-40%);";
      case "right top":
        return "right: 100%; top: 0%; transform: translateY(40%);";
      case "right bottom":
        return "right: 100%; bottom: 0%; transform: translateY(-40%);";
      case "bottom":
      default:
        return "bottom: 100%; left: 50%; transform: translateX(-50%);";
    }
  }

  function handleValue(value) {
    return value !== null
      ? typeof value === "number"
        ? `${value * theme.layout.spacingUnit}px`
        : value
      : "0px";
  }

  function handleMargin() {
    switch (position) {
      case "top":
      case "top left":
      case "top right":
        return `margin-bottom: ${handleValue(spacing)};`;
      case "left":
      case "left top":
      case "left bottom":
        return `margin-right: ${handleValue(spacing)};`;
      case "right":
      case "right top":
      case "right bottom":
        return `margin-left: ${handleValue(spacing)};`;
      case "bottom":
      case "bottom left":
      case "bottom right":
      default:
        return `margin-top: ${handleValue(spacing)};`;
    }
  }

  return (
    <div
      data-testid="Wps-Popover"
      className={classnames("Wps-PopoverWrapper", className)}
      {...wrapperProps}
    >
      {backdrop && (
        <Backdrop
          visible={visible !== null ? (visible ? true : false) : false}
          duration={backdropProps?.duration || 300}
          color={backdropProps?.color || "basic"}
          onClick={backdropProps?.onClick || onBackdropClick}
          type={backdropProps?.type || "fixed"}
          {...backdropProps}
        />
      )}
      {children}

      <div className="Wps-Popover" {...otherProps}>
        {content}
      </div>
      <style jsx>{`
        .Wps-PopoverWrapper {
          position: relative;
          display: inline-block;
        }
        .Wps-PopoverWrapper:hover > .Wps-Popover {
          visibility: ${visible !== null
            ? visible
              ? "visible"
              : "hidden"
            : "visible"};
          opacity: ${visible !== null ? (visible ? "1" : "0") : "1"};
          ${handleHoverAnimation()}
        }

        .Wps-PopoverWrapper > .Wps-Popover {
          position: absolute;
          z-index: 1;
          background-color: ${handleBackgroundColor()};
          color: ${handleTextColor()};
          padding: ${typeof content === "string" ? "0.5rem" : "0"};
          font-size: 14px;
          line-height: 1.2;
          transition: all 0.3s ease;
          visibility: ${visible !== null
            ? visible
              ? "visible"
              : "hidden"
            : "hidden"};
          opacity: ${visible !== null ? (visible ? "1" : "0") : "0"};
          ${handlePosition()}
          ${handleShape()}
          ${handleMargin()}
          ${visible ? handleHoverAnimation() : ""}

          width: ${width ? handleValue(width) : "max-content"};
          max-width: ${maxWidth ? handleValue(maxWidth) : "max-content"};
          min-width: ${minWidth ? handleValue(minWidth) : "min-content"};
          height: ${height ? handleValue(height) : "max-content"};
          max-height: ${maxHeight ? handleValue(maxHeight) : "max-content"};
          min-height: ${minHeight ? handleValue(minHeight) : "min-content"};
        }

        /* Triangle */
        .Wps-PopoverWrapper .Wps-Popover:after {
          content: "";
          position: absolute;
          ${arrow ? handleArrow() : ""}
          ${handleArrowPosition()}
        }
      `}</style>
    </div>
  );
};
