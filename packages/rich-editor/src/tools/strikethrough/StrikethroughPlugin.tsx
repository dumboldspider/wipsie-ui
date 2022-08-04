import React from "react";
import { isMod } from "../../utils/isMod";
import { toggleMark } from "../../utils/toggleMark";
import { StrikethroughPluginConstructor } from "./Strikethrough.types";
// Strikethrough plugin
export class StrikethroughPlugin {
  // This is where we define the leaf type
  public leafType = "strikethrough";

  // This is the plugin leaf renderer
  public renderLeaf = ({ children, attributes }) => (
    <del {...attributes}>{children}</del>
  );

  // This is where we define some behavior when the user presses a key
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

  // This is where we setup the plugin external options
  constructor(props: StrikethroughPluginConstructor = null) {
    const { renderLeaf = null } = props;
    this.renderLeaf = renderLeaf || this.renderLeaf;
  }
}
