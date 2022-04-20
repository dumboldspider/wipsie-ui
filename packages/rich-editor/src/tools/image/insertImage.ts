import { Editor, Transforms } from "slate";

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
