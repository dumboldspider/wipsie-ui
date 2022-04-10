import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const headingsTool: ToolbarItemProps = {
  id: "headings",
  command: "formatBlock",
  format: "select",
  value: {
    h1: "Heading 1",
    h2: "Heading 2",
    h3: "Heading 3",
    h4: "Heading 4",
    h5: "Heading 5",
    h6: "Heading 6",
    p: "Paragraph",
    pre: "Preformatted",
  },
  icon: <b>Head</b>,
};
