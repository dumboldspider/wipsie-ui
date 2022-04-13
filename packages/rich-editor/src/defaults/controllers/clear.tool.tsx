import { ClearOutlined } from "@ant-design/icons";
import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const clearTool: ToolbarItemProps = {
  id: "clear",
  command: "removeFormat",
  format: "button",
  value: "",
  icon: <ClearOutlined />,
  keyEvent: (e) => {
    return e.key === "Escape";
  },
};
