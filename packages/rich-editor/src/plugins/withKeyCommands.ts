import { Editor, Node, Path, Transforms } from "slate";

import { createParagraphNode } from "../utils/createParagraphNode";

export const withKeyCommands = (editor) => {
  const { deleteBackward, insertBreak, isVoid } = editor;

  editor.deleteBackward = (...args) => {
    const [parentNode, parentPath] = Editor.parent(
      editor,
      editor.selection.focus.path
    );

    if (
      (isVoid(parentNode) || !Node.string(parentNode).length) &&
      // if parentPath is 0, it means it's the first node, so we can't delete it because it's the root node
      // without this check, it will delete the whole document making it uneditable
      parentPath.toString().substring(0, 1) !== "0"
    ) {
      Transforms.removeNodes(editor, { at: parentPath });
    } else {
      deleteBackward(...args);
    }
  };

  editor.insertBreak = (...args) => {
    const [parentNode, parentPath] = Editor.parent(
      editor,
      editor.selection.focus.path
    );

    if (isVoid(parentNode)) {
      const nextPath = Path.next(parentPath);
      Transforms.insertNodes(editor, createParagraphNode(), {
        at: nextPath,
        select: true,
      });
    } else {
      insertBreak(...args);
    }
  };

  return editor;
};
