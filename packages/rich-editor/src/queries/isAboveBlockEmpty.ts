import { Editor } from "slate";
import { getAboveBlock, GetAboveBlockOptions } from "./getAboveBlock";
import { isAncestorEmpty } from "./isAncestorEmpty";

export type IsAboveBlockEmptyOptions = GetAboveBlockOptions;

/**
 * Is the block above the selection empty.
 */
export function isAboveBlockEmpty(
  editor: Editor,
  options: IsAboveBlockEmptyOptions = {}
) {
  try {
    const [block] = getAboveBlock(editor, options);
    return isAncestorEmpty(block);
    // eslint-disable-next-line no-empty
  } catch (e) {}
}
