import React from "react";
import { isMod } from "../../utils/isMod";
import { toggleMark } from "../../utils/toggleMark";
// Strikethrough plugin
export class StrikethroughPlugin {
  public leafType = "strikethrough";

  public renderLeaf = ({ children, attributes }) => (
    <del {...attributes}>{children}</del>
  );

  public onKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    { editor }
  ) => {
    if (!editor) return;

    if (isMod(event) && event.key === "s") {
      event.preventDefault();
      return toggleMark(editor, "strikethrough");
    }
    return;
  };
}
