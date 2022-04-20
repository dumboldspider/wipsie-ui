import { Ancestor, Editor, NodeEntry } from "slate";
import { EditorAboveOptions } from "../types/editor";

export type GetAboveByTypesOptions = EditorAboveOptions;

/**
 * Get the element above a location by types.
 */
export function getAboveByTypes<T extends Ancestor>(
  editor: Editor,
  types: string[],
  options: GetAboveByTypesOptions = {}
): NodeEntry<T> | undefined {
  const { match } = options;
  return Editor.above<T>(editor, {
    ...options,
    match: (node) =>
      types.includes((node as any).type as string) &&
      (!match || match(node, null)),
  });
}
