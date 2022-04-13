import { UnorderedListOutlined } from "@ant-design/icons";
import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const unorderedListTool: ToolbarItemProps = {
  id: "unorderedList",
  command: "insertUnorderedList",
  format: "button",
  value: "",
  icon: <UnorderedListOutlined />,
};
