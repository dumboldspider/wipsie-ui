import { Editor } from "slate";
import { getNodes } from "./getNodes";

export function getNodesByTypes(
  editor: Editor,
  types: string[],
  options = {} as any
) {
  try {
    const { match } = options;
    return getNodes(editor, {
      ...options,
      match: (node) =>
        types.includes(node.type as string) && (!match || match(node)),
    });
    // eslint-disable-next-line no-empty
  } catch (e) {}
}
