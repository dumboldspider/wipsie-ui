// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { HiddenProps } from "./Hidden.types";

export const Hidden: React.FC<HiddenProps> = (props) => {
  const theme = useTheme();
  const {
    xs = null,
    sm = null,
    md = null,
    lg = null,
    xl = null,
    children,
    ...otherProps
  } = props;

  return (
    <div
      data-testid="Wps-Hidden"
      className={classnames("Wps-Hidden")}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-Hidden {
          ${xs === true
            ? `display: none;`
            : xs === false
            ? `display: block;`
            : ``}
        }
        @media only screen and (min-width: ${theme.breakpoints.sm.min}) {
          .Wps-Hidden {
            ${sm === true
              ? `display: none;`
              : sm === false
              ? `display: block;`
              : ``}
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.md.min}) {
          .Wps-Hidden {
            ${md === true
              ? `display: none;`
              : md === false
              ? `display: block;`
              : ``}
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.lg.min}) {
          .Wps-Hidden {
            ${lg === true
              ? `display: none;`
              : lg === false
              ? `display: block;`
              : ``}
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.xl.min}) {
          .Wps-Hidden {
            ${xl === true
              ? `display: none;`
              : xl === false
              ? `display: block;`
              : ``}
          }
        }
      `}</style>
      {children}
    </div>
  );
};
