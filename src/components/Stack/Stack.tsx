// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { StackProps } from "./Stack.types";


export const Stack: React.FC<StackProps> = (props) => {
  const theme = useTheme();
  const { children, className, ...otherProps } = props;
  return (
    <div data-testid="Wps-Stack" className={classnames('Wps-Stack', className)}>
    <style jsx>{`
    .Wps-Stack{
      color: black;
    }
    `}</style>
    {children}
    </div>
);
}

 

