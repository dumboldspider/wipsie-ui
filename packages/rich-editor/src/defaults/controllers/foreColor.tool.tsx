import { FontColorsOutlined } from "@ant-design/icons";
import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";
import { ColorSelector } from "../../components/Tools/ColorSelector";

export const foreColorTool: ToolbarItemProps = {
  id: "foreColor",
  command: "insertHTML",
  format: "custom",
  value: null,
  icon: <FontColorsOutlined />,
  component: ColorSelector,
};
