import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const underlineTool: ToolbarItemProps = {
  id: "underline",
  command: "underline",
  format: "button",
  value: "",
  icon: <u>U</u>,
  keyEvent: (e) => {
    return (e.ctrlKey && e.key === "u") || (e.metaKey && e.key === "u");
  },
};
