import React from "react";
import { isMod } from "../../utils/isMod";
import { toggleMark } from "../../utils/toggleMark";
import { UnderlinePluginConstructor } from "./Underline.types";
// Underline plugin
export class UnderlinePlugin {
  // This is where we define the leaf type
  public leafType = "underline";

  // This is the plugin leaf renderer
  public renderLeaf = ({ children, attributes }) => (
    <u {...attributes}>{children}</u>
  );

  // This is where we define some behavior when the user presses a key
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

  // This is where we setup the plugin external options
  constructor({ renderLeaf = null }: UnderlinePluginConstructor) {
    this.renderLeaf = renderLeaf || this.renderLeaf;
  }
}
