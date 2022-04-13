import { BoldOutlined } from "@ant-design/icons";
import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const boldTool: ToolbarItemProps = {
  id: "bold",
  command: "bold",
  format: "button",
  value: "",
  icon: <BoldOutlined />,
  keyEvent: (e) => {
    return (e.ctrlKey && e.key === "b") || (e.metaKey && e.key === "b");
  },
};
