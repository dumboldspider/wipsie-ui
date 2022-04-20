export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingElementType extends Element {
  level: HeadingLevel;
}
