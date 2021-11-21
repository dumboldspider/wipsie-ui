// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { TabsProps } from "./Tabs.types";


export const Tabs: React.FC<TabsProps> = (props) => {
  const theme = useTheme();
  const { children, className, ...otherProps } = props;
  return (
    <div data-testid="Wps-Tabs" className={classnames('Wps-Tabs', className)}>
    <style jsx>{`
    .Wps-Tabs{
      color: black;
    }
    `}</style>
    {children}
    </div>
);
}

 

