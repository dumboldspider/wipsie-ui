// Generated with util/create-component.js
import React, { useMemo } from "react";
import classnames from "classnames";
import { AspectRatioProps } from "./AspectRatio.types";

export const AspectRatio: React.FC<AspectRatioProps> = (props) => {
  const {
    aspectRatio = "100%",
    internalProps = {},
    children,
    className,
    ...otherProps
  } = props;

  const handleAspectRatio = useMemo(() => {
    if (aspectRatio.includes("%")) {
      return aspectRatio;
    } else {
      const ratio = aspectRatio.split(":");
      return `${
        100 /
        parseFloat((parseFloat(ratio[0]) / parseFloat(ratio[1])).toFixed(2))
      }%`;
    }
  }, [aspectRatio]);

  return (
    <div className={classnames("Wps-AspectRatio", className)} {...otherProps}>
      <div
        className={classnames("Wps-AspectRatioInternal", className)}
        {...internalProps}
      >
        {children}
      </div>

      <style jsx>{`
        .Wps-AspectRatio {
          width: 100%;
          background: transparent;
          position: relative;
          padding-bottom: ${handleAspectRatio};
        }
        .Wps-AspectRatio .Wps-AspectRatioInternal {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};
