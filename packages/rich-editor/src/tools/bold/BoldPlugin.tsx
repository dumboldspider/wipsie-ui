import React from "react";
import { isMod } from "../../utils/isMod";
import { toggleMark } from "../../utils/toggleMark";

// Bold plugin
export class BoldPlugin {
  public leafType = "bold";

  public renderLeaf = ({ children, attributes }) => (
    <b {...attributes}>{children}</b>
  );

  public onKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    { editor }
  ) => {
    if (!editor) return;

    if (isMod(event) && event.key === "b") {
      event.preventDefault();
      return toggleMark(editor, "bold");
    }
    return;
  };
}
