// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { SkeletonProps } from "./Skeleton.types";
import isThemePalette from "../../utils/isThemePalette";
import brightness from "../../utils/brightness";
import { getBreakpoints } from "../Flex/Flex.functions";

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  const theme = useTheme();
  const {
    type = "circle",
    radius = null,
    color = "shade",
    visible = true,

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

    children,
    className,
    ...otherProps
  } = props as any;

  function handleBackgroundColor() {
    switch (color) {
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

  function handleShape() {
    switch (type) {
      case "round":
        return "border-radius: 1.5em;";
      case "square":
        return "border-radius: 0em;";
      case "circle":
        return "border-radius: 50%;";
      case "rounded":
      default:
        return "border-radius: 0.7em;";
    }
  }

  function handleValue(value) {
    return value
      ? typeof value === "number"
        ? `${value * theme.layout.spacingUnit}px`
        : value
      : "auto";
  }

  if (!visible) {
    return <>{children}</>;
  }

  return (
    <div
      data-testid="Wps-Skeleton"
      className={classnames("Wps-Skeleton", className)}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-Skeleton {
          display: ${visible ? "block" : "none"};
          ${handleShape()}

          width: ${radius
            ? getBreakpoints(radius, "xs", handleValue)
            : width
            ? getBreakpoints(width, "xs", handleValue)
            : "auto"};
          height: ${radius
            ? getBreakpoints(radius, "xs", handleValue)
            : height
            ? getBreakpoints(height, "xs", handleValue)
            : "auto"};

          animation-duration: 1s;
          animation-fill-mode: forwards;
          animation-iteration-count: infinite;
          animation-name: placeholderSkeleton;
          animation-timing-function: linear ease;
          background: ${handleBackgroundColor()};
          position: relative;
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            ${brightness(handleBackgroundColor(), 20)},
            rgba(255, 255, 255, 0)
          );
          background-size: 80px auto;
          background-repeat: no-repeat;
          background-position: left -40px top 0;
        }

        @keyframes placeholderSkeleton {
          0% {
            background-position: left -40px top 0;
          }
          50% {
            background-position: right -80px top 0;
          }
          auto {
            background-position: left -40px top 0;
          }
        }

        @media only screen and (min-width: ${theme.breakpoints.sm.min}) {
          .Wps-Skeleton {
            width: ${radius
              ? getBreakpoints(radius, "sm", handleValue)
              : width
              ? getBreakpoints(width, "sm", handleValue)
              : "auto"};
            height: ${radius
              ? getBreakpoints(radius, "sm", handleValue)
              : height
              ? getBreakpoints(height, "sm", handleValue)
              : "auto"};
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.md.min}) {
          .Wps-Skeleton {
            width: ${radius
              ? getBreakpoints(radius, "md", handleValue)
              : width
              ? getBreakpoints(width, "md", handleValue)
              : "auto"};
            height: ${radius
              ? getBreakpoints(radius, "md", handleValue)
              : height
              ? getBreakpoints(height, "md", handleValue)
              : "auto"};
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.lg.min}) {
          .Wps-Skeleton {
            width: ${radius
              ? getBreakpoints(radius, "lg", handleValue)
              : width
              ? getBreakpoints(width, "lg", handleValue)
              : "auto"};
            height: ${radius
              ? getBreakpoints(radius, "lg", handleValue)
              : height
              ? getBreakpoints(height, "lg", handleValue)
              : "auto"};
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.xl.min}) {
          .Wps-Skeleton {
            width: ${radius
              ? getBreakpoints(radius, "xl", handleValue)
              : width
              ? getBreakpoints(width, "xl", handleValue)
              : "auto"};
            height: ${radius
              ? getBreakpoints(radius, "xl", handleValue)
              : height
              ? getBreakpoints(height, "xl", handleValue)
              : "auto"};
          }
        }
      `}</style>

      <style jsx>{`
        .Wps-Skeleton {
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

          min-width: ${getBreakpoints(minWidth, "xs", handleValue)};
          max-width: ${getBreakpoints(maxWidth, "xs", handleValue)};
          min-height: ${getBreakpoints(minHeight, "xs", handleValue)};
          max-height: ${getBreakpoints(maxHeight, "xs", handleValue)};
        }

        @media only screen and (min-width: ${theme.breakpoints.sm.min}) {
          .Wps-Skeleton {
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

            min-width: ${getBreakpoints(minWidth, "sm", handleValue)};
            max-width: ${getBreakpoints(maxWidth, "sm", handleValue)};
            min-height: ${getBreakpoints(minHeight, "sm", handleValue)};
            max-height: ${getBreakpoints(maxHeight, "sm", handleValue)};
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.md.min}) {
          .Wps-Skeleton {
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

            min-width: ${getBreakpoints(minWidth, "md", handleValue)};
            max-width: ${getBreakpoints(maxWidth, "md", handleValue)};
            min-height: ${getBreakpoints(minHeight, "md", handleValue)};
            max-height: ${getBreakpoints(maxHeight, "md", handleValue)};
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.lg.min}) {
          .Wps-Skeleton {
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

            min-width: ${getBreakpoints(minWidth, "lg", handleValue)};
            max-width: ${getBreakpoints(maxWidth, "lg", handleValue)};
            min-height: ${getBreakpoints(minHeight, "lg", handleValue)};
            max-height: ${getBreakpoints(maxHeight, "lg", handleValue)};
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.xl.min}) {
          .Wps-Skeleton {
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

            min-width: ${getBreakpoints(minWidth, "xl", handleValue)};
            max-width: ${getBreakpoints(maxWidth, "xl", handleValue)};
            min-height: ${getBreakpoints(minHeight, "xl", handleValue)};
            max-height: ${getBreakpoints(maxHeight, "xl", handleValue)};
          }
        }
      `}</style>
    </div>
  );
};
