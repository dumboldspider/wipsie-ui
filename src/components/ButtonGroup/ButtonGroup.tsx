// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";

import { ButtonGroupProps } from "./ButtonGroup.types";
import { Sizes } from "components/Button/Button.stories";

export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const {
    children,
    shape = "round",
    orientation = "horizontal",
    variant = "contained",
    size = "medium",
    fullWidth = false,
    backgroundColor = "primary",
    hoverBackgroundColor = null,
    color = null,
    className = null,
    ...otherProps
  } = props;

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        groupVariant: variant,
        groupShape: shape,
        groupSize: size,
        groupBackgroundColor: backgroundColor,
        groupHoverBackgroundColor: hoverBackgroundColor,
        groupColor: color,
      });
    }
    return child;
  });

  function handleShapeFirstHorizontal() {
    switch (shape) {
      case "round":
        return "border-radius: 10em 0px 0px 10em; border-left-width: 2px;";
      case "rounded":
        return "border-radius: 0.7em 0px 0px 0.7em; border-left-width: 2px;";
      case "square":
        return "border-radius: 0em; border-left-width: 2px;";
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
        return "border-radius: 0em; border-right-width: 2px;";
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
        return "border-radius: 0em; border-top-width: 2px;";
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
        return "border-radius: 0em; border-bottom-width: 2px;";
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
      className={classnames("Wps-ButtonGroup", className)}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-ButtonGroup {
          display: flex;
          width: ${fullWidth ? "100%" : "max-content"};
          ${handleOrientation()};
          position: relative;
        }

        .Wps-ButtonGroup :global(button) {
          border-radius: 0;
          flex-grow: 1;
          min-width: max-content;
          height: auto;
          ${orientation === "vertical" ? "width: 100%;" : ""}
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
      {childrenWithProps}
    </div>
  );
};
