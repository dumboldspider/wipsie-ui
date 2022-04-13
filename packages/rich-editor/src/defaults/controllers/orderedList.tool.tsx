import { OrderedListOutlined } from "@ant-design/icons";
import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const orderedListTool: ToolbarItemProps = {
  id: "orderedList",
  command: "insertOrderedList",
  format: "button",
  value: "",
  icon: <OrderedListOutlined />,
};
