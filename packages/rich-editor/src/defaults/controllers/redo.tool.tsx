import { RedoOutlined } from "@ant-design/icons";
import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const redoTool: ToolbarItemProps = {
  id: "redo",
  command: "redo",
  format: "button",
  value: "",
  icon: <RedoOutlined />,
  keyEvent: (e) => {
    return (e.ctrlKey && e.key === "y") || (e.metaKey && e.key === "y");
  },
};
