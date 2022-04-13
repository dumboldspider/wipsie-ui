import { SmileOutlined } from "@ant-design/icons";
import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";
import { EmojiSelector } from "../../components/Tools/EmojiSelector";
import { emojiCatalog } from "../emojiCatalog";

export const emojiTool: ToolbarItemProps = {
  id: "emoji",
  command: "insertHTML",
  format: "custom",
  value: null,
  icon: <SmileOutlined />,
  component: EmojiSelector,
  metadata: {
    emojiCatalog: emojiCatalog,
  },
};
