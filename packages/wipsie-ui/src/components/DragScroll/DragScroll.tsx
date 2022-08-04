// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { DragScrollProps } from "./DragScroll.types";

export const DragScroll: React.FC<DragScrollProps> = (props) => {
  const theme = useTheme();
  const { children, className } = props;
  return (
    <div
      data-testid="Wps-DragScroll"
      className={classnames("Wps-DragScroll", className)}
    >
      <style jsx>{`
        .Wps-DragScroll {
          color: black;
        }
      `}</style>
      {children}
    </div>
  );
};
