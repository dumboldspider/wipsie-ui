import { Descendant, Editor } from "slate";

export function getSelectionFragment(
  editor: Editor
): ReadonlyArray<Descendant> | null {
  try {
    const { selection } = editor;
    return selection ? Editor.fragment(editor, selection) : null;
    // eslint-disable-next-line no-empty
  } catch (e) {}
}
