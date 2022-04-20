import { Typography } from "@wipsie/ui";
import React from "react";
import { ImageElement } from "../tools/image";
import { LinkMark } from "../tools/link";
// import { MentionElement } from "../tools/mentions";

export const RenderElement = (props) => {
  const { attributes, children, element } = props;

  const style = { textAlign: element.align };
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );

    case "link":
      return <LinkMark {...props}>{children}</LinkMark>;

    case "image":
      return <ImageElement {...props}>{children}</ImageElement>;

    case "heading":
      return (
        <Typography
          variant={element.level}
          align={element.align || "left"}
          {...attributes}
        >
          {children}
        </Typography>
      );

    // case "mention":
    //   return <MentionElement {...props}>{children}</MentionElement>;

    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );

    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );

    case "paragraph":
    default:
      return (
        <Typography
          variant="body1"
          align={element.align || "left"}
          {...attributes}
        >
          {children}
        </Typography>
      );
  }
};
