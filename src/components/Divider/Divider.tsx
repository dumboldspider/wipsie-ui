// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";
import { DividerProps } from "./Divider.types";

export const Divider: React.FC<DividerProps> = (props) => {
  const theme = useTheme();
  const {
    gap = 2,
    spacing = 1,
    volume = 1,
    color = "subtext",
    direction = "horizontal",
    shape = "square",
    children,
    className,
    ...otherProps
  } = props;

  function handleValue(value) {
    return value !== null
      ? typeof value === "number"
        ? `${value * theme.layout.spacingUnit}px`
        : value
      : "10px";
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

  function handleColor() {
    switch (color) {
      case "text":
        return theme.palette.text;
      case "subtext":
        return theme.palette.subtext;
      case "highlight":
        return theme.palette.highlight;
      case "background":
        return theme.palette.background;
      case "shade":
        return theme.palette.shade;
      default:
        return isThemePalette(color) ? theme.palette[color][500] : color;
    }
  }

  return (
    <div
      data-testid="Wps-Divider"
      className={classnames("Wps-Divider", direction, className)}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-Divider {
          background: ${handleColor()};
          position: relative;
          ${handleShape()};
        }

        .Wps-Divider.horizontal {
          width: auto;
          max-width: 100%;
          height: ${typeof volume === "number"
            ? `calc(${volume} * 1px)`
            : volume};
          margin: ${handleValue(spacing)} auto;
        }
        .Wps-Divider.vertical {
          height: 100%;
          max-height: 100%;
          width: ${typeof volume === "number"
            ? `calc(${volume} * 1px)`
            : volume};
          margin: auto ${handleValue(spacing)};
        }
        .Wps-DividerText {
          position: absolute;
          left: 50%;
          top: 50%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          transform: translate(-50%, -50%);
          font-size: 1rem;
          background-color: ${theme.palette.background};
          color: ${theme.palette.text};
        }
        .Wps-DividerText.horizontal {
          min-height: 100%;
          padding: 0 ${handleValue(gap)};
        }
        .Wps-DividerText.vertical {
          /* min-height: 100%; */
          padding: ${handleValue(gap)} 0;
        }
      `}</style>
      {children && (
        <span className={`Wps-DividerText ${direction}`}>{children}</span>
      )}
    </div>
  );
};
