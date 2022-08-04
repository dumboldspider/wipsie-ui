import React from "react";
import { isMod } from "../../utils/isMod";
import { toggleMark } from "../../utils/toggleMark";
import { ItalicPluginConstructor } from "./Italic.types";

// Italic plugin
export class ItalicPlugin {
  // This is where we define the leaf type
  public leafType = "italic";

  // This is the plugin leaf renderer
  public renderLeaf = ({ children, attributes }) => (
    <i {...attributes}>{children}</i>
  );

  // This is where we define some behavior when the user presses a key
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

  // This is where we setup the plugin external options
  constructor(props: ItalicPluginConstructor = null) {
    const { renderLeaf = null } = props;
    this.renderLeaf = renderLeaf || this.renderLeaf;
  }
}
