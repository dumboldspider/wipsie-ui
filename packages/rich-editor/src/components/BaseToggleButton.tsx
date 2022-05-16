import React from "react";
import { Button } from "@wipsie/ui";
import { isMarkActive } from "../utils/isMarkActive";
import { useSlate } from "slate-react";
import { toggleMark } from "../utils/toggleMark";

export const BaseToggleButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      shape="rounded"
      size="small"
      variant="ghost"
      active={isMarkActive(editor, format)}
      onMouseDown={(e) => {
        e.preventDefault(); // prevent toolbar from taking focus away from editor
      }}
      onClick={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {icon}
    </Button>
  );
};
