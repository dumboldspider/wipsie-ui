import React from "react";

export const DefaultLeafRenders = {
  bold: ({ attributes, children }) => <b {...attributes}>{children}</b>,
  italic: ({ attributes, children }) => <i {...attributes}>{children}</i>,
  underline: ({ attributes, children }) => <u {...attributes}>{children}</u>,
  strikethrough: ({ attributes, children }) => (
    <del {...attributes}>{children}</del>
  ),
  default: ({ attributes, children }) => (
    <span {...attributes}>{children}</span>
  ),
};
