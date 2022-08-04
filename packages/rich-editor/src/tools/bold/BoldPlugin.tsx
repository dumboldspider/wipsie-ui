import React from "react";
import { isMod } from "../../utils/isMod";
import { toggleMark } from "../../utils/toggleMark";
import { BoldPluginConstructor } from "./Bold.types";

// Bold plugin
export class BoldPlugin {
  // This is where we define the leaf type
  public leafType = "bold";

  // This is the plugin leaf renderer
  public renderLeaf = ({ children, attributes }) => (
    <b {...attributes}>{children}</b>
  );

  // This is where we define some behavior when the user presses a key
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

  // This is where we setup the plugin external options
  constructor(props: BoldPluginConstructor = null) {
    const { renderLeaf = null } = props;
    this.renderLeaf = renderLeaf || this.renderLeaf;
  }
}
