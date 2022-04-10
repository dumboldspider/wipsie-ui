import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";
import { LinkModal } from "../../components/Tools/LinkModal";

export const linkTool: ToolbarItemProps = {
  id: "link",
  command: "createLink",
  format: "custom",
  value: null,
  icon: <b>Link</b>,
  component: LinkModal,
};
