import { Typography } from "@wipsie/ui";
import React from "react";
import { ImageElement } from "../tools/image";
import { LinkMark } from "../tools/link";

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
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );

    case "link":
      return <LinkMark {...props} />;

    case "image":
      return <ImageElement {...props} />;

    case "heading":
      return (
        <Typography variant={element.level} {...attributes}>
          {children}
        </Typography>
      );

    case "paragraph":
      return (
        <Typography variant="body1" {...attributes}>
          {children}
        </Typography>
      );

    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};
