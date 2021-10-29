// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";

import { SpacingProps } from "./Spacing.types";

export const Spacing: React.FC<SpacingProps> = (props) => {
  const { height, className = null, ...otherProps } = props;

  function handleHeight() {
    return height
      ? typeof height === "number"
        ? `${height}px`
        : height
      : "10px";
  }

  return (
    <div
      data-testid="Wps-Spacing"
      className={classnames("Wps-Spacing", className)}
      {...otherProps}
    >
      <style jsx>{`
        .Wps-Spacing {
          width: 100%;
          height: ${handleHeight()};
        }
      `}</style>
    </div>
  );
};
