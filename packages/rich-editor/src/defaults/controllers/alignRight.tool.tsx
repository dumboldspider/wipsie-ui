import { AlignRightOutlined } from "@ant-design/icons";
import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const alignRightTool: ToolbarItemProps = {
  id: "alignRight",
  command: "justifyRight",
  format: "button",
  value: "",
  icon: <AlignRightOutlined />,
};
