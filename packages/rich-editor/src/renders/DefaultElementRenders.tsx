import React from "react";
import { Typography } from "@wipsie/ui";

export const DefaultElementRenders = {
  "block-quote": ({ attributes, children, element }) => (
    <blockquote style={{ textAlign: element?.align || "left" }} {...attributes}>
      {children}
    </blockquote>
  ),
  "code-block": ({ attributes, children, element }) => (
    <pre {...attributes}>
      <code>{children}</code>
    </pre>
  ),
  "list-item": ({ attributes, children, element }) => (
    <li
      style={{
        listStyle: "disc",
        textAlign: element?.align || "left",
      }}
      {...attributes}
    >
      {children}
    </li>
  ),
  "bulleted-list": ({ attributes, children, element }) => (
    <ul
      style={{
        textAlign: element?.align || "left",
      }}
      {...attributes}
    >
      {children}
    </ul>
  ),

  "numbered-list": ({ attributes, children, element }) => (
    <ol
      style={{
        textAlign: element?.align || "left",
      }}
      {...attributes}
    >
      {children}
    </ol>
  ),

  default: ({ attributes, children, element }) => (
    <Typography variant={"body1"} align={element?.align || "left"}>
      <span {...attributes}>{children}</span>
    </Typography>
  ),
};
