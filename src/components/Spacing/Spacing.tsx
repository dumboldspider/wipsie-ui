// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";

import { SpacingProps } from "./Spacing.types";

const Spacing: React.FC<SpacingProps> = (props) => {
  const { height, ...otherProps } = props;

  function handleHeight() {
    return height
      ? typeof height === "number"
        ? `${height}px`
        : height
      : "10px";
  }

  return (
    <div
      data-testid="Spacing"
      className={classnames("Spacing")}
      {...otherProps}
    >
      <style jsx>{`
        .Spacing {
          width: 100%;
          height: ${handleHeight()};
        }
      `}</style>
    </div>
  );
};

export default Spacing;
