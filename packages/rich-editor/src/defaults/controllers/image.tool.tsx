import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const imageTool: ToolbarItemProps = {
  id: "image",
  command: "insertImage",
  format: "button",
  value: () => {
    const vv = prompt("Enter URL", "https://");
    return vv;
  },
  icon: <b>Image</b>,
};
