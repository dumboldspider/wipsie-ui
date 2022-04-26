import { Ancestor, Node } from "slate";

export function isAncestorEmpty(node: Ancestor) {
  try {
    return (
      node.children.length === 1 &&
      [...Node.texts(node)].length === 1 &&
      Node.string(node) === ""
    );
    // eslint-disable-next-line no-empty
  } catch (e) {}
}
