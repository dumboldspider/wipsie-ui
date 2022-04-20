import { Editor, Location, Range } from "slate";
import { getPointBefore, GetPointBeforeOptions } from "./getPointBefore";

export type GetRangeBeforeOptions = GetPointBeforeOptions;

/**
 * Get range from {@link getPointBefore} to the end point of `at`.
 */
export function getRangeBefore(
  editor: Editor,
  at: Location,
  options?: GetRangeBeforeOptions
): Range | undefined {
  try {
    const anchor = getPointBefore(editor, at, options);

    if (anchor) {
      const focus = Editor.start(editor, at);

      return {
        anchor,
        focus,
      };
    }
    // eslint-disable-next-line no-empty
  } catch (e) {}
}
