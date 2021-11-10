// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { DividerProps } from "./Divider.types";


export const Divider: React.FC<DividerProps> = (props) => {
  const theme = useTheme();
  const { children, className, ...otherProps } = props;
  return (
    <div data-testid="Wps-Divider" className={classnames('Wps-Divider', className)}>
    <style jsx>{`
    .Wps-Divider{
      color: black;
    }
    `}</style>
    {children}
    </div>
);
}

 

