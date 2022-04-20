import { Button } from "@wipsie/ui";
import React from "react";
import { isBlockActive } from "../utils/isBlockActive";
import { useSlate } from "slate-react";
import { TEXT_ALIGN_TYPES } from "../base/constants";
import { toggleBlock } from "../utils/toggleBlock";

export const BaseBlockToggleButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      shape="rounded"
      size="small"
      variant="ghost"
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
      )}
      onClick={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {icon}
    </Button>
  );
};
