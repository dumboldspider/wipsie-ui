import { UndoOutlined } from "@ant-design/icons";
import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const undoTool: ToolbarItemProps = {
  id: "undo",
  command: "undo",
  format: "button",
  value: "",
  icon: <UndoOutlined />,
  keyEvent: (e) => {
    return (e.ctrlKey && e.key === "z") || (e.metaKey && e.key === "z");
  },
};
