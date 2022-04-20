import { Editor, Element as SlateElement, BaseEditor } from "slate";
/**
 * It returns true if the current selection is inside a block of the given type
 * @param {BaseEditor} editor - BaseEditor - the editor object
 * @param {string} format - The format to check for.
 * @param [blockType=type] - The type of block you want to check for. This is
 * usually "type" but can be "list_item" or "heading" or whatever.
 * @returns A boolean value.
 */
export const isBlockActive = (
  editor: BaseEditor,
  format: string,
  blockType = "type"
) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    })
  );

  return !!match;
};
