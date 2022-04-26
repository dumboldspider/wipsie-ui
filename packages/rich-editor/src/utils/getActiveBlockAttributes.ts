import { Editor, Element as SlateElement, BaseEditor } from "slate";

/**
 * Get the attributes of the currently selected block.
 * @param {BaseEditor} editor - BaseEditor
 * @returns The attributes of the active block.
 */
export const getActiveBlockAttributes = (editor: BaseEditor) => {
  try {
    const [match] = Array.from(
      Editor.nodes(editor, {
        match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n),
      })
    );

    return match;
    // eslint-disable-next-line no-empty
  } catch (e) {}
};
