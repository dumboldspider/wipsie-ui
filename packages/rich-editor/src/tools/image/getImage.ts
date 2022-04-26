import { Editor, Element } from "slate";
import { ImageElementType } from "./ImageElement";

export const getImage = (editor: Editor): ImageElementType | undefined => {
  const imageEntries = Array.from(
    Editor.nodes(editor, { match: (n) => (n as any).type === "image" })
  );
  if (imageEntries.length === 0) {
    return undefined;
  }

  const node = imageEntries[0][0];
  return Element.isElement(node) ? (node as ImageElementType) : undefined;
};
