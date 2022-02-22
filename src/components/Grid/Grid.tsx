// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import { COLUMNS_CONSTANT } from "../../config/constants";
import useTheme from "../../hooks/useTheme";
import { GridProps, GridContainerProps, GridItemProps } from "./Grid.types";

export const Grid: React.FC<GridProps> = (props) => {
  const { item = false, container = false, ...otherProps } = props;

  if (container) {
    return <GridContainer {...(otherProps as any)} />;
  } else if (item) {
    return <GridItem {...(otherProps as any)} />;
  } else {
    return <div>container or item prop missing</div>;
  }
};

const GridContainer: React.FC<GridContainerProps> = (props) => {
  const theme = useTheme();
  const {
    children,
    spacing = 2,
    noWrap,
    className = null,
    ...otherProps
  } = props;

  return (
    <div
      data-testid="Wps-GridContainer"
      className={classnames("Wps-GridContainer", className)}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-GridContainer {
          width: calc(100% + ${spacing * theme.layout.spacingUnit}px);
          display: flex;
          flex-wrap: ${noWrap ? "no-wrap" : "wrap"};
          margin-top: -${spacing * theme.layout.spacingUnit}px;
          margin-left: -${spacing * theme.layout.spacingUnit}px;
        }

        .Wps-GridContainer > :global(.Wps-GridItem) {
          padding-left: ${spacing * theme.layout.spacingUnit}px;
          padding-top: ${spacing * theme.layout.spacingUnit}px;
        }
      `}</style>
      {children}
    </div>
  );
};

const GridItem: React.FC<GridItemProps> = (props) => {
  const theme = useTheme();
  const {
    children,
    xs = true,
    sm = null,
    md = null,
    lg = null,
    xl = null,
    className = null,
    ...otherProps
  } = props;

  function handleXS() {
    if (typeof xs === "number") {
      return `width: calc(100% / ${COLUMNS_CONSTANT} * ${xs});`;
    } else if (typeof xs === "string") {
      return `width: ${xs};`;
    } else {
      return `flex-grow: 1;`;
    }
  }
  function handleSM() {
    if (typeof sm === "number") {
      return `width: calc(100% / ${COLUMNS_CONSTANT} * ${sm});`;
    } else if (typeof sm === "boolean") {
      return `flex-grow: 1;`;
    } else if (typeof sm === "string") {
      return `width: ${sm};`;
    } else {
      return "";
    }
  }
  function handleMD() {
    if (typeof md === "number") {
      return `width: calc(100% / ${COLUMNS_CONSTANT} * ${md});`;
    } else if (typeof md === "boolean") {
      return `flex-grow: 1;`;
    } else if (typeof md === "string") {
      return `width: ${md};`;
    } else {
      return "";
    }
  }
  function handleLG() {
    if (typeof lg === "number") {
      return `width: calc(100% / ${COLUMNS_CONSTANT} * ${lg});`;
    } else if (typeof lg === "boolean") {
      return `flex-grow: 1;`;
    } else if (typeof lg === "string") {
      return `width: ${lg};`;
    } else {
      return "";
    }
  }
  function handleXL() {
    if (typeof xl === "number") {
      return `width: calc(100% / ${COLUMNS_CONSTANT} * ${xl});`;
    } else if (typeof xl === "boolean") {
      return `flex-grow: 1;`;
    } else if (typeof xl === "string") {
      return `width: ${xl};`;
    } else {
      return "";
    }
  }

  return (
    <div
      data-testid="Wps-GridItem"
      className={classnames("Wps-GridItem", className)}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-GridItem {
          ${handleXS()}
        }
        .Wps-GridItem > :global(.Wps-Container) {
          height: 100%;
        }
        @media only screen and (min-width: ${theme.breakpoints.sm.min}) {
          .Wps-GridItem {
            ${handleSM()}
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.md.min}) {
          .Wps-GridItem {
            ${handleMD()}
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.lg.min}) {
          .Wps-GridItem {
            ${handleLG()}
          }
        }
        @media only screen and (min-width: ${theme.breakpoints.xl.min}) {
          .Wps-GridItem {
            ${handleXL()}
          }
        }
      `}</style>
      {children}
    </div>
  );
};
