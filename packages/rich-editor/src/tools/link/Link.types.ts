import { BaseElement, Range } from "slate";
import { RenderElementProps } from "slate-react";

export interface LinkElementType extends BaseElement {
  url: string;
  openInNewTab: boolean;
}

export type LinkElementProps = RenderElementProps & {
  element: LinkElementType;
};

export interface LinkState {
  isNew: boolean;
  selection: Range;
  url: string;
  openInNewTab: boolean;
}
