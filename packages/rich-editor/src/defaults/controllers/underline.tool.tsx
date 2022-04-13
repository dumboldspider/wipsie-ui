import { UnderlineOutlined } from "@ant-design/icons";
import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const underlineTool: ToolbarItemProps = {
  id: "underline",
  command: "underline",
  format: "button",
  value: "",
  icon: <UnderlineOutlined />,
  keyEvent: (e) => {
    return (e.ctrlKey && e.key === "u") || (e.metaKey && e.key === "u");
  },
};
