// Generated with util/create-component.js
import React, { useMemo } from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { AspectRatioProps } from "./AspectRatio.types";

export const AspectRatio: React.FC<AspectRatioProps> = (props) => {
  const {
    aspectRatio = "100%",
    wrapperProps = {},
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
      return `${parseFloat(ratio[0]) / parseFloat(ratio[1])}%`;
    }
  }, [aspectRatio]);

  return (
    <div
      data-testid="Wps-AspectRatio"
      className={classnames("Wps-AspectRatioWrapper", className)}
      {...wrapperProps}
    >
      <div className={classnames("Wps-AspectRatio", className)} {...otherProps}>
        <div
          className={classnames("Wps-AspectRatioInternal", className)}
          {...internalProps}
        >
          <style jsx>{`
            .Wps-AspectRatioWrapper {
              background: transparent;
              overflow: auto;
              max-width: 100%;
            }
            .Wps-AspectRatio {
              width: 100%;
              background: transparent;
              position: relative;
              padding-bottom: ${handleAspectRatio};
            }
            .Wps-AspectRatioInternal {
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
          {children}
        </div>
      </div>
    </div>
  );
};
