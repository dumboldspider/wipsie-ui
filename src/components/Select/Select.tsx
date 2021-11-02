// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { SelectProps } from "./Select.types";


export const Select: React.FC<SelectProps> = (props) => {
  const theme = useTheme();
  const { children, className, ...otherProps } = props;
  return (
    <div data-testid="Wps-Select" className={classnames('Wps-Select', className)}>
    <style jsx>{`
    .Wps-Select{
      color: black;
    }
    `}</style>
    {children}
    </div>
);
}

 

