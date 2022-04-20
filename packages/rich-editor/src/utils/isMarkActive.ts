import { BaseEditor, Editor } from "slate";

/**
 * It returns true if the current selection has the mark with the given format
 * @param {BaseEditor} editor - BaseEditor
 * @param {string} format - The name of the mark to check for.
 * @returns A boolean value.
 */
export const isMarkActive = (editor: BaseEditor, format: string) => {
  try {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
    // eslint-disable-next-line no-empty
  } catch (e) {}
};
