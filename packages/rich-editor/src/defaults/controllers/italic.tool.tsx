import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const italicTool: ToolbarItemProps = {
  id: "italic",
  command: "italic",
  format: "button",
  value: "",
  icon: <i>I</i>,
  keyEvent: (e) => {
    return (e.ctrlKey && e.key === "i") || (e.metaKey && e.key === "i");
  },
};
