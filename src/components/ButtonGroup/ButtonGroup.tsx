// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";

import { ButtonGroupProps } from "./ButtonGroup.types";

export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const {
    children,
    shape = "round",
    orientation = "horizontal",
    ...otherProps
  } = props;

  function handleShapeFirstHorizontal() {
    switch (shape) {
      case "round":
        return "border-radius: 10em 0px 0px 10em; border-left-width: 2px;";
      case "rounded":
        return "border-radius: 0.7em 0px 0px 0.7em; border-left-width: 2px;";
      case "square":
        return "border-radius: 0em;";
      default:
        return "border-radius: 0.7em 0px 0px 0.7em; border-left-width: 2px;";
    }
  }
  function handleShapeLastHorizontal() {
    switch (shape) {
      case "round":
        return "border-radius: 0px 10em 10em 0px; border-right-width: 2px;";
      case "rounded":
        return "border-radius: 0px 0.7em 0.7em 0px; border-right-width: 2px;";
      case "square":
        return "border-radius: 0em;";
      default:
        return "border-radius: 0px 0.7em 0.7em 0px; border-right-width: 2px;";
    }
  }

  function handleShapeFirstVertical() {
    switch (shape) {
      case "round":
        return "border-radius: 10em 10em 0px 0px; border-top-width: 2px;";
      case "rounded":
        return "border-radius: 0.7em 0.7em 0px 0px; border-top-width: 2px;";
      case "square":
        return "border-radius: 0em;";
      default:
        return "border-radius: 0.7em 0.7em 0px 0px; border-top-width: 2px;";
    }
  }
  function handleShapeLastVertical() {
    switch (shape) {
      case "round":
        return "border-radius: 0px 0px 10em 10em; border-bottom-width: 2px;";
      case "rounded":
        return "border-radius: 0px 0px 0.7em 0.7em; border-bottom-width: 2px;";
      case "square":
        return "border-radius: 0em;";
      default:
        return "border-radius: 0px 0px 0.7em 0.7em; border-bottom-width: 2px;";
    }
  }

  function handleOrientation() {
    switch (orientation) {
      case "vertical":
        return "flex-direction: column;";
      case "horizontal":
      default:
        return "flex-direction: row;";
    }
  }

  function handleOrientationBorder() {
    switch (orientation) {
      case "vertical":
        return "border-top-width: 1px; border-bottom-width: 1px;";
      case "horizontal":
      default:
        return "border-left-width: 1px; border-right-width: 1px;";
    }
  }

  return (
    <div
      data-testid="Wps-ButtonGroup"
      className={classnames("Wps-ButtonGroup")}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-ButtonGroup {
          display: flex;
          ${handleOrientation()};
        }

        .Wps-ButtonGroup :global(button) {
          border-radius: 0;
          width: 100%;
          min-width: max-content;

          ${handleOrientationBorder()};
        }

        .Wps-ButtonGroup :global(button:first-child) {
          ${orientation === "horizontal"
            ? handleShapeFirstHorizontal()
            : handleShapeFirstVertical()};
        }
        .Wps-ButtonGroup :global(button:last-child) {
          ${orientation === "horizontal"
            ? handleShapeLastHorizontal()
            : handleShapeLastVertical()};
        }
      `}</style>
      {children}
    </div>
  );
};
