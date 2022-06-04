import React from "react";
import { isMod } from "../../utils/isMod";
import { toggleMark } from "../../utils/toggleMark";

// Italic plugin
export class ItalicPlugin {
  public leafType = "italic";

  public renderLeaf = ({ children, attributes }) => (
    <i {...attributes}>{children}</i>
  );

  public onKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    { editor }
  ) => {
    if (!editor) return;

    if (isMod(event) && event.key === "i") {
      event.preventDefault();
      return toggleMark(editor, "italic");
    }
    return;
  };
}
