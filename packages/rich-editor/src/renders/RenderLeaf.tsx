import React from "react";
import { StrikethroughMark } from "../tools/strikethrough";
import { BoldMark } from "../tools/bold";
import { ItalicMark } from "../tools/italic";
import { UnderlineMark } from "../tools/underline";

export const RenderLeaf = ({ attributes, children, leaf }) => {
  // if is a placeholder, return empty string
  // if (leaf.placeholder) {
  //   children = <Container></Container>;
  // }

  // wrap and rewrap the mark according to the type
  children = <span {...attributes}>{children}</span>;

  // bold leaf mark
  if (leaf.bold) {
    children = <BoldMark attributes={attributes}>{children}</BoldMark>;
  }

  // italic leaf mark
  if (leaf.italic) {
    children = <ItalicMark attributes={attributes}>{children}</ItalicMark>;
  }

  // underline leaf mark
  if (leaf.underline) {
    children = (
      <UnderlineMark attributes={attributes}>{children}</UnderlineMark>
    );
  }

  // strikethrough leaf mark
  if (leaf.strikethrough) {
    children = (
      <StrikethroughMark attributes={attributes}>{children}</StrikethroughMark>
    );
  }

  return children;
};
