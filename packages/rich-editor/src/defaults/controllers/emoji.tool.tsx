import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";
import { EmojiSelector } from "../../components/Tools/EmojiSelector";
import { emojiCatalog } from "../emojiCatalog";

export const emojiTool: ToolbarItemProps = {
  id: "emoji",
  command: "insertHTML",
  format: "custom",
  value: null,
  icon: <b>emoji</b>,
  component: EmojiSelector,
  metadata: {
    emojiCatalog: emojiCatalog,
  },
};
