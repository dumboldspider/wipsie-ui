import React from "react";
import { isMod } from "../../utils/isMod";
import { toggleMark } from "../../utils/toggleMark";
// Underline plugin
export class UnderlinePlugin {
  public leafType = "underline";

  public renderLeaf = ({ children, attributes }) => (
    <u {...attributes}>{children}</u>
  );

  public onKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    { editor }
  ) => {
    if (!editor) return;

    if (isMod(event) && event.key === "u") {
      event.preventDefault();
      return toggleMark(editor, "underline");
    }
    return;
  };
}
