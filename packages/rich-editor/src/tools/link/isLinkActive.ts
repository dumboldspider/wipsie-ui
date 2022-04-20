import { Editor } from "slate";

export const isLinkActive = (editor: Editor) => {
  const linkEntries = Array.from(
    Editor.nodes(editor, { match: (n) => (n as any).type === "link" })
  );
  return linkEntries.length > 0;
};
