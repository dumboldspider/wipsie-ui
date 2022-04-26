import { Editor, Node } from "slate";
import { unhangRange } from "./unhangRange";

export function getNodes<T extends Node>(editor: Editor, options = {}) {
  try {
    unhangRange(editor, options);
    return Editor.nodes<T>(editor, options);
    // eslint-disable-next-line no-empty
  } catch (e) {}
}
