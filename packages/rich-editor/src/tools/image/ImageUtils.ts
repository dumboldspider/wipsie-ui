import { Editor, Element, Transforms } from "slate";
import { ImageElementType } from "./Image.types";

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

export const insertImage = (editor: Editor, url: string, alt?: string) => {
  const text = { text: "" };
  const image = { type: "image", url, alt, children: [text] };
  Transforms.insertNodes(editor, image);
};

export const updateImage = (editor: Editor, url: string, alt?: string) => {
  Transforms.setNodes(editor, { url, alt } as any);
};

export const removeImage = (editor: Editor, opts = {}) => {
  Transforms.removeNodes(editor, {
    ...opts,
    match: (n) => (n as any).type === "image",
  });
};
