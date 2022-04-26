import { Editor } from "slate";

/**
 * Get the selected text.
 * Return empty string if no selection.
 */
export function getSelectionText(editor: Editor): string {
  try {
    const { selection } = editor;
    return selection ? Editor.string(editor, selection) : "";
    // eslint-disable-next-line no-empty
  } catch (e) {}
}
