export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingElementType extends Element {
  level: HeadingLevel;
}

export type HeadingExtraProps = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "label";
  align: "left" | "center" | "right";
  children: React.ReactNode;
  attributes: any;
};
