import { Editor, Location, Path, Point, Range } from "slate";

export interface GetPointFromLocationOptions {
  /**
   * @default editor.selection
   */
  at?: Location | null;
  /**
   * @default 'focus'
   */
  pointTypeOfRange?: "anchor" | "focus";
}

/**
 * Get the point from a location.
 *
 * If the location is a range, get the anchor point.
 *
 * If the location is a path, get the point at this path with offset 0.
 */
export function getPointFromLocation(
  editor: Editor,
  options: GetPointFromLocationOptions = {}
): Point | undefined {
  try {
    const { at = editor.selection, pointTypeOfRange = "focus" } = options;

    if (!at) {
      return;
    }

    if (Range.isRange(at)) {
      return at[pointTypeOfRange];
    }

    if (Point.isPoint(at)) {
      return at;
    }

    if (Path.isPath(at)) {
      return { path: at, offset: 0 };
    }
    // eslint-disable-next-line no-empty
  } catch (e) {}
}
