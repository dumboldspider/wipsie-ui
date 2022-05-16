import { Editor, Transforms, Element, Range } from "slate";
import { LinkElementType } from "./Link.types";

export const isLinkActive = (editor: Editor) => {
  const linkEntries = Array.from(
    Editor.nodes(editor, { match: (n) => (n as any).type === "link" })
  );
  return linkEntries.length > 0;
};

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

export const createLinkNode = (href, text) => ({
  type: "link",
  href,
  children: [{ text }],
});

export const unwrapLink = (editor: Editor) => {
  Transforms.unwrapNodes(editor, { match: (n) => (n as any).type === "link" });
};

export const wrapLink = (
  editor: Editor,
  url: string,
  openInNewTab: boolean
) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor);
  }

  const { selection } = editor;
  const isCollapsed = selection && Range.isCollapsed(selection);
  const link = {
    type: "link",
    url,
    openInNewTab,
    children: isCollapsed ? [{ text: url }] : [],
  };

  if (isCollapsed) {
    Transforms.insertNodes(editor, link);
  } else {
    Transforms.wrapNodes(editor, link, { split: true });
    Transforms.collapse(editor, { edge: "end" });
  }
};

export const insertLink = (
  editor: Editor,
  url: string,
  openInNewTab: boolean
) => {
  if (editor.selection) {
    wrapLink(editor, url, openInNewTab);
  }
};

export const removeLink = (editor, opts = {}) => {
  Transforms.unwrapNodes(editor, {
    ...opts,
    match: (n) =>
      !Editor.isEditor(n) && Element.isElement(n) && (n as any).type === "link",
  });
};
