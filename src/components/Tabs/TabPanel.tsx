// Generated with util/create-component.js
import React from "react";
import { TabPanelProps } from "./Tabs.types";

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...otherProps
}) => {
  if (value !== index) return null;
  return <div {...otherProps}>{children}</div>;
};
