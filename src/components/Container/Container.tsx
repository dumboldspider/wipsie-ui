// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";
import { ContainerProps } from "./Container.types";
import { getBreakpoints, getAlign, getJustify } from "../Flex/Flex.functions";
import opacity from "../../utils/opacity";

export const Container: React.FC<ContainerProps> = (props) => {
  const theme = useTheme();
  const {
    // Flex props
    display = "block",
    align = "start",
    direction = "column",
    justify = "start",
    wrap = "wrap",
    alignContent = "start",

    // Box Props
    m = 0,
    mt = null,
    mr = null,
    mb = null,
    ml = null,
    // -----
    p = theme.layout.padding,
    pt = null,
    pr = null,
    pb = null,
    pl = null,
    // -----
    width = null,
    height = null,
    minWidth = null,
    maxWidth = null,
    minHeight = null,
    maxHeight = null,
    fullWidth = false,
    fullHeight = false,

    // Default props
    children,
    backgroundColor = "background",
    hoverBackgroundColor = null,
    clickable = false,
    className = null,
    shape = "round",
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

  function handleHoverBackgroundColor() {
    if (!hoverBackgroundColor) return handleBackgroundColor();
    switch (hoverBackgroundColor) {
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

  function handleShadowColor() {
    switch (backgroundColor) {
      case "highlight":
        return theme.palette.basic.shadow;
      case "background":
        return theme.palette.basic.shadow;
      case "shade":
        return theme.palette.basic.shadow;
      default:
        return isThemePalette(backgroundColor)
          ? theme.palette[backgroundColor].shadow
          : opacity(backgroundColor, 24);
    }
  }

  function handleValue(value) {
    if (!value) return "";
    return value
      ? typeof value === "number"
        ? `${value * theme.layout.spacingUnit}px`
        : value
      : "";
  }

  return (
    <>
      <div
        data-testid="Wps-Container"
        className={classnames("Wps-Container", className)}
        {...otherProps}
      >
        {children}
      </div>

      <style jsx>{`
        .Wps-Container {
          background: ${handleBackgroundColor()};
          ${handleShape()}
          box-shadow: 0px 16px 32px ${handleShadowColor()};
          ${clickable ? "cursor: pointer;" : ""}
          transition: all 250ms ease 0ms;
        }
        .Wps-Container:hover {
          background: ${handleHoverBackgroundColor()};
        }
      `}</style>

      <style jsx>{`
        .Wps-Container {
          display: ${getBreakpoints(display, "xs", (d) => d)};
          flex-direction: ${getBreakpoints(direction, "xs", (d) => d)};
          flex-wrap: ${getBreakpoints(wrap, "xs", (w) => w)};
          justify-content: ${getBreakpoints(justify, "xs", getJustify)};
          align-items: ${getBreakpoints(align, "xs", getAlign)};

          margin: ${getBreakpoints(m, "xs", handleValue)};
          margin-top: ${getBreakpoints(mt, "xs", handleValue)};
          margin-right: ${getBreakpoints(mr, "xs", handleValue)};
          margin-bottom: ${getBreakpoints(mb, "xs", handleValue)};
          margin-left: ${getBreakpoints(ml, "xs", handleValue)};

          padding: ${getBreakpoints(p, "xs", handleValue)};
          padding-top: ${getBreakpoints(pt, "xs", handleValue)};
          padding-right: ${getBreakpoints(pr, "xs", handleValue)};
          padding-bottom: ${getBreakpoints(pb, "xs", handleValue)};
          padding-left: ${getBreakpoints(pl, "xs", handleValue)};

          width: ${fullWidth
            ? "100%"
            : getBreakpoints(width, "xs", handleValue)};
          height: ${fullHeight
            ? "100%"
            : getBreakpoints(height, "xs", handleValue)};
          min-width: ${getBreakpoints(minWidth, "xs", handleValue)};
          max-width: ${getBreakpoints(maxWidth, "xs", handleValue)};
          min-height: ${getBreakpoints(minHeight, "xs", handleValue)};
          max-height: ${getBreakpoints(maxHeight, "xs", handleValue)};
        }

        @media only screen and (min-width: ${theme.breakpoints.sm.min}) {
          .Wps-Container {
            display: ${getBreakpoints(display, "sm", (d) => d)};
            flex-direction: ${getBreakpoints(direction, "sm", (d) => d)};
            flex-wrap: ${getBreakpoints(wrap, "sm", (w) => w)};
            justify-content: ${getBreakpoints(justify, "sm", getJustify)};
            align-items: ${getBreakpoints(align, "sm", getAlign)};

            margin: ${getBreakpoints(m, "sm", handleValue)};
            margin-top: ${getBreakpoints(mt, "sm", handleValue)};
            margin-right: ${getBreakpoints(mr, "sm", handleValue)};
            margin-bottom: ${getBreakpoints(mb, "sm", handleValue)};
            margin-left: ${getBreakpoints(ml, "sm", handleValue)};

            padding: ${getBreakpoints(p, "sm", handleValue)};
            padding-top: ${getBreakpoints(pt, "sm", handleValue)};
            padding-right: ${getBreakpoints(pr, "sm", handleValue)};
            padding-bottom: ${getBreakpoints(pb, "sm", handleValue)};
            padding-left: ${getBreakpoints(pl, "sm", handleValue)};

            width: ${fullWidth
              ? "100%"
              : getBreakpoints(width, "sm", handleValue)};
            height: ${fullHeight
              ? "100%"
              : getBreakpoints(height, "sm", handleValue)};
            min-width: ${getBreakpoints(minWidth, "sm", handleValue)};
            max-width: ${getBreakpoints(maxWidth, "sm", handleValue)};
            min-height: ${getBreakpoints(minHeight, "sm", handleValue)};
            max-height: ${getBreakpoints(maxHeight, "sm", handleValue)};
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.md.min}) {
          .Wps-Container {
            display: ${getBreakpoints(display, "md", (d) => d)};
            flex-direction: ${getBreakpoints(direction, "md", (d) => d)};
            flex-wrap: ${getBreakpoints(wrap, "md", (w) => w)};
            justify-content: ${getBreakpoints(justify, "md", getJustify)};
            align-items: ${getBreakpoints(align, "md", getAlign)};

            margin: ${getBreakpoints(m, "md", handleValue)};
            margin-top: ${getBreakpoints(mt, "md", handleValue)};
            margin-right: ${getBreakpoints(mr, "md", handleValue)};
            margin-bottom: ${getBreakpoints(mb, "md", handleValue)};
            margin-left: ${getBreakpoints(ml, "md", handleValue)};

            padding: ${getBreakpoints(p, "md", handleValue)};
            padding-top: ${getBreakpoints(pt, "md", handleValue)};
            padding-right: ${getBreakpoints(pr, "md", handleValue)};
            padding-bottom: ${getBreakpoints(pb, "md", handleValue)};
            padding-left: ${getBreakpoints(pl, "md", handleValue)};

            width: ${fullWidth
              ? "100%"
              : getBreakpoints(width, "md", handleValue)};
            height: ${fullHeight
              ? "100%"
              : getBreakpoints(height, "md", handleValue)};
            min-width: ${getBreakpoints(minWidth, "md", handleValue)};
            max-width: ${getBreakpoints(maxWidth, "md", handleValue)};
            min-height: ${getBreakpoints(minHeight, "md", handleValue)};
            max-height: ${getBreakpoints(maxHeight, "md", handleValue)};
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.lg.min}) {
          .Wps-Container {
            display: ${getBreakpoints(display, "lg", (d) => d)};
            flex-direction: ${getBreakpoints(direction, "lg", (d) => d)};
            flex-wrap: ${getBreakpoints(wrap, "lg", (w) => w)};
            justify-content: ${getBreakpoints(justify, "lg", getJustify)};
            align-items: ${getBreakpoints(align, "lg", getAlign)};

            margin: ${getBreakpoints(m, "lg", handleValue)};
            margin-top: ${getBreakpoints(mt, "lg", handleValue)};
            margin-right: ${getBreakpoints(mr, "lg", handleValue)};
            margin-bottom: ${getBreakpoints(mb, "lg", handleValue)};
            margin-left: ${getBreakpoints(ml, "lg", handleValue)};

            padding: ${getBreakpoints(p, "lg", handleValue)};
            padding-top: ${getBreakpoints(pt, "lg", handleValue)};
            padding-right: ${getBreakpoints(pr, "lg", handleValue)};
            padding-bottom: ${getBreakpoints(pb, "lg", handleValue)};
            padding-left: ${getBreakpoints(pl, "lg", handleValue)};

            width: ${fullWidth
              ? "100%"
              : getBreakpoints(width, "lg", handleValue)};
            height: ${fullHeight
              ? "100%"
              : getBreakpoints(height, "lg", handleValue)};
            min-width: ${getBreakpoints(minWidth, "lg", handleValue)};
            max-width: ${getBreakpoints(maxWidth, "lg", handleValue)};
            min-height: ${getBreakpoints(minHeight, "lg", handleValue)};
            max-height: ${getBreakpoints(maxHeight, "lg", handleValue)};
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.xl.min}) {
          .Wps-Container {
            display: ${getBreakpoints(display, "xl", (d) => d)};
            flex-direction: ${getBreakpoints(direction, "xl", (d) => d)};
            flex-wrap: ${getBreakpoints(wrap, "xl", (w) => w)};
            justify-content: ${getBreakpoints(justify, "xl", getJustify)};
            align-items: ${getBreakpoints(align, "xl", getAlign)};

            margin: ${getBreakpoints(m, "xl", handleValue)};
            margin-top: ${getBreakpoints(mt, "xl", handleValue)};
            margin-right: ${getBreakpoints(mr, "xl", handleValue)};
            margin-bottom: ${getBreakpoints(mb, "xl", handleValue)};
            margin-left: ${getBreakpoints(ml, "xl", handleValue)};

            padding: ${getBreakpoints(p, "xl", handleValue)};
            padding-top: ${getBreakpoints(pt, "xl", handleValue)};
            padding-right: ${getBreakpoints(pr, "xl", handleValue)};
            padding-bottom: ${getBreakpoints(pb, "xl", handleValue)};
            padding-left: ${getBreakpoints(pl, "xl", handleValue)};

            width: ${fullWidth
              ? "100%"
              : getBreakpoints(width, "xl", handleValue)};
            height: ${fullHeight
              ? "100%"
              : getBreakpoints(height, "xl", handleValue)};
            min-width: ${getBreakpoints(minWidth, "xl", handleValue)};
            max-width: ${getBreakpoints(maxWidth, "xl", handleValue)};
            min-height: ${getBreakpoints(minHeight, "xl", handleValue)};
            max-height: ${getBreakpoints(maxHeight, "xl", handleValue)};
          }
        }
      `}</style>
    </>
  );
};

// const styles = (content) => {
//   return css`
//     ${content}
//   `;
// };
