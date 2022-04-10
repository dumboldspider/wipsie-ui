import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";
import { BackColorSelector } from "../../components/Tools/BackColorSelector";

export const backColorTool: ToolbarItemProps = {
  id: "backColor",
  command: "insertHTML",
  format: "custom",
  value: null,
  icon: <b>BG Color</b>,
  component: BackColorSelector,
};
