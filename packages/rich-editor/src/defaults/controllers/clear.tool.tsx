import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const clearTool: ToolbarItemProps = {
  id: "clear",
  command: "removeFormat",
  format: "button",
  value: "",
  icon: <b>Clean</b>,
  keyEvent: (e) => {
    return e.key === "Escape";
  },
};
