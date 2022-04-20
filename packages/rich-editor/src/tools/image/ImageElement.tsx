import { Button, Container,  useTheme } from "@wipsie/ui";
import React from "react";
import { BaseElement } from "slate";
import {
  RenderElementProps,
  useFocused,
  useReadOnly,
  useSelected,
  useSlateStatic,
} from "slate-react";
import { removeImage } from "./insertImage";

export interface ImageElementType extends BaseElement {
  url: string;
  alt?: string;
}

export type ImageElementProps = RenderElementProps & {
  element: ImageElementType;
};

export const ImageElement = ({
  element,
  attributes,
  children,
}: ImageElementProps) => {
  const selected = useSelected();
  const focused = useFocused();
  const readOnly = useReadOnly();
  const editor = useSlateStatic();
  const theme = useTheme();

  const url = element.url as string;
  const alt = typeof element.alt === "string" ? element.alt : undefined;

  if (readOnly) {
    return (
      <div {...attributes}>
        <div contentEditable={false}>
          <img src={url} alt={alt} />
        </div>
        {children}
      </div>
    );
  } else {
    return (
      <div {...attributes}>
        <div contentEditable={false} style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              visibility: selected && focused ? "visible" : "hidden",
              opacity: selected && focused ? 1 : 0,
              transition: "opacity 0.2s",
            }}
          >
            <Container
              display="flex"
              direction="row"
              align="center"
              justify="start"
              p={1}
              m={1}
              shape="rounded"
              backgroundColor={theme.palette.text}
            >
              <Button
                size="mini"
                onClick={() => removeImage(editor)}
                backgroundColor="danger"
              >
                Delete
              </Button>
            </Container>
          </div>

          <img
            src={url}
            alt={alt}
            style={{
              boxShadow:
                selected && focused
                  ? `0 0 2px 3px ${theme.palette.primary[300]}`
                  : "none",
            }}
          />
        </div>
        {children}
      </div>
    );
  }
};
