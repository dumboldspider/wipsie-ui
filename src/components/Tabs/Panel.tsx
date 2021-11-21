// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import { TabPanelProps } from "./Tabs.types";

export const TabPanel: React.FC<TabPanelProps> = (props) => {
  const theme = useTheme();
  const { children, className, ...otherProps } = props;
  return (
    <div
      data-testid="Wps-TabPanel"
      className={classnames("Wps-TabPanel", className)}
    >
      <style jsx>{`
        .Wps-TabPanel {
          color: black;
        }
      `}</style>
      {children}
    </div>
  );
};
