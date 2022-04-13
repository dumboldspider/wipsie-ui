import { AlignLeftOutlined } from "@ant-design/icons";
import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const alignLeftTool: ToolbarItemProps = {
  id: "alignLeft",
  command: "justifyLeft",
  format: "button",
  value: "",
  icon: <AlignLeftOutlined />,
};
