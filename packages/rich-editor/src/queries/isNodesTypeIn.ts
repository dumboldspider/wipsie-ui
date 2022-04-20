import { Editor } from "slate";
import { getNodesByTypes } from "./getNodesByTypes";

export function isNodesTypeIn(
  editor: Editor,
  types: string[],
  options = {} as any
) {
  const [match] = getNodesByTypes(editor, types, options);
  return !!match;
}
