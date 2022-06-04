import { ButtonProps } from "@wipsie/ui";
import { BaseElement, Range } from "slate";
import { RenderElementProps } from "slate-react";

export interface ImageState {
  isNew: boolean;
  selection: Range;
  url: string;
  alt: string;
}

export interface ImageElementType extends BaseElement {
  url: string;
  alt?: string;
}

export type ImageElementProps = RenderElementProps & {
  element: ImageElementType;
};

export interface ImageButtonProps {
  uploadUrl: string;
  accessKey: string;
  acceptedFormats?: string;
  maxFileSize?: number;
  content?: string | Element;
  startIcon?: ButtonProps["startIcon"];
  endIcon?: ButtonProps["endIcon"];
  shape?: ButtonProps["shape"];
  size?: ButtonProps["size"];
  backgroundColor?: ButtonProps["backgroundColor"];
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
}
