import { BaseEditor, Editor } from "slate";
import { isMarkActive } from "./isMarkActive";

/**
 * If the mark is active, remove it, otherwise add it
 * @param {BaseEditor} editor - BaseEditor
 * @param {string} format - The name of the mark to toggle.
 */
export const toggleMark = (editor: BaseEditor, format: string) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};
