import React from "react";
import { Transforms } from "slate";
import { isSelectionAnyInHeading, toggleHeadingNodes } from "./HeadingUtils";
import { isMod } from "../../utils/isMod";
import { createParagraphNode } from "../../utils/createParagraphNode";
import { Typography } from "@wipsie/ui";

export class HeadingsPlugin {
  public onKeyDown = (event, { editor }) => {
    const modShift = isMod(event);

    if (!editor) return;

    const variantType = modShift
      ? event.key === "1"
        ? "h1"
        : event.key === "2"
        ? "h2"
        : event.key === "3"
        ? "h3"
        : event.key === "4"
        ? "h4"
        : event.key === "5"
        ? "h5"
        : event.key === "6"
        ? "h6"
        : event.key === "p"
        ? "body1"
        : false
      : false;

    // if current block is a heading and press enter, it will create a new paragraph
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      isSelectionAnyInHeading(editor)
    ) {
      event.preventDefault();
      Transforms.insertNodes(editor, createParagraphNode());
    }

    if (variantType) {
      event.preventDefault();
      toggleHeadingNodes(editor, variantType);
    }
  };

  public elementType = "heading";

  public renderElement = ({ element, children, attributes }) => {
    return (
      <Typography
        variant={element?.level || "body1"}
        align={element?.align || "left"}
      >
        <span {...attributes}>{children}</span>
      </Typography>
    );
  };
}
