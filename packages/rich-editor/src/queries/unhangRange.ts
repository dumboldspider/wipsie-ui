import { Editor, Location, Range } from "slate";
import { EditorUnhangRangeOptions } from "../types/editor";

export interface UnhangRangeOptions extends EditorUnhangRangeOptions {
  at?: Location;
  /**
   * @default false
   */
  hanging?: boolean;
}

/**
 * Call {@link Editor.unhangRange} if `unhang` is true and if `at` (default: selection) is a range.
 * Assign returned `Range` to `options.at` after callced.
 */
export function unhangRange(
  editor: Editor,
  options: UnhangRangeOptions = {}
): void {
  try {
    const { at = editor.selection, voids, hanging = false } = options;

    if (!hanging && Range.isRange(at)) {
      options.at = Editor.unhangRange(editor, at, { voids });
    }
    // eslint-disable-next-line no-empty
  } catch (e) {}
}
