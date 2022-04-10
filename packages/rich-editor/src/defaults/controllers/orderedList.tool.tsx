import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const orderedListTool: ToolbarItemProps = {
  id: "orderedList",
  command: "insertOrderedList",
  format: "button",
  value: "",
  icon: <b>Olist</b>,
};
