import { Editor, Node } from "slate";
import { unhangRange } from "./unhangRange";

export function getNodes<T extends Node>(editor: Editor, options = {}) {
  unhangRange(editor, options);
  return Editor.nodes<T>(editor, options);
}
