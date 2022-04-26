import { Editor, Element } from "slate";
import { LinkElementType } from "./LinkMark";

export const getLink = (editor: Editor): LinkElementType | undefined => {
  const linkEntries = Array.from(
    Editor.nodes(editor, { match: (n) => (n as any).type === "link" })
  );
  if (linkEntries.length === 0) {
    return undefined;
  }

  const node = linkEntries[0][0];
  return Element.isElement(node) ? (node as LinkElementType) : undefined;
};
