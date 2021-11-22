// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { SpacingProps } from "./Spacing.types";
import { getBreakpoints } from "../Flex/Flex.functions";

export const Spacing: React.FC<SpacingProps> = (props) => {
  const theme = useTheme();
  const { height, width, className = null, ...otherProps } = props;

  function handleValue(value) {
    return value
      ? typeof value === "number"
        ? `${value * theme.layout.spacingUnit}px`
        : value
      : "0px";
  }

  return (
    <div
      data-testid="Wps-Spacing"
      className={classnames("Wps-Spacing", className)}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-Spacing {
          width: ${width ? getBreakpoints(width, "xs", handleValue) : "100%"};
          height: ${height
            ? getBreakpoints(height, "xs", handleValue)
            : "100%"};
        }
        @media only screen and (min-width: ${theme.breakpoints.sm.min}) {
          .Wps-Spacing {
            width: ${width ? getBreakpoints(width, "sm", handleValue) : "100%"};
            height: ${height
              ? getBreakpoints(height, "sm", handleValue)
              : "100%"};
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.md.min}) {
          .Wps-Spacing {
            width: ${width ? getBreakpoints(width, "md", handleValue) : "100%"};
            height: ${height
              ? getBreakpoints(height, "md", handleValue)
              : "100%"};
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.lg.min}) {
          .Wps-Spacing {
            width: ${width ? getBreakpoints(width, "lg", handleValue) : "100%"};
            height: ${height
              ? getBreakpoints(height, "lg", handleValue)
              : "100%"};
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.xl.min}) {
          .Wps-Spacing {
            width: ${width ? getBreakpoints(width, "xl", handleValue) : "100%"};
            height: ${height
              ? getBreakpoints(height, "xl", handleValue)
              : "100%"};
          }
        }
      `}</style>
    </div>
  );
};
