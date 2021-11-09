// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import { PortalProps } from "./Portal.types";
import ReactDOM from "react-dom";

export const Portal: React.FC<PortalProps> = (props) => {
  const { id, visible = false, children, className, ...otherProps } = props;

  if (!visible) return null;

  return ReactDOM.createPortal(
    <div
      id={id}
      data-testid="Wps-Portal"
      className={classnames("Wps-Portal", className)}
      {...otherProps}
    >
      {children}
    </div>,
    document.body
  );
};

export default Portal;
