// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { TabsProps } from "./Tabs.types";

export const Tab: React.FC<TabsProps> = (props) => {
  const theme = useTheme();
  const { children, className, ...otherProps } = props;
  return (
    <div data-testid="Wps-Tab" className={classnames("Wps-Tab", className)}>
      <style jsx>{`
        .Wps-Tab {
          color: black;
        }
      `}</style>
      {children}
    </div>
  );
};
