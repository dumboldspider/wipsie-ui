import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const quoteTool: ToolbarItemProps = {
  id: "quote",
  command: "formatBlock",
  format: "button",
  value: "blockquote",
  icon: <b>Quote</b>,
};
