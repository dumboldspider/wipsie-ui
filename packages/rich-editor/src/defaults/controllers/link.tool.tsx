import { LinkOutlined } from "@ant-design/icons";
import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";
import { LinkModal } from "../../components/Tools/LinkModal";

export const linkTool: ToolbarItemProps = {
  id: "link",
  command: "createLink",
  format: "custom",
  value: null,
  icon: <LinkOutlined />,
  component: LinkModal,
};
