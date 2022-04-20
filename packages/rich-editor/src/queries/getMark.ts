import { Editor } from "slate";

export function getMark<T>(editor: Editor, type: string): T | undefined {
  try {
    const marks = Editor.marks(editor);
    return marks?.[type];
    // eslint-disable-next-line no-empty
  } catch (e) {}
}
