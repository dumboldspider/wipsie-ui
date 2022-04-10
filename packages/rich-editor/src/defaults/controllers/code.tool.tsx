import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const codeTool: ToolbarItemProps = {
  id: "code",
  command: "formatBlock",
  format: "button",
  value: "pre",
  icon: <b>Code</b>,
};
