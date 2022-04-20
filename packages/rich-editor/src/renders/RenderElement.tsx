import React from "react";
import { HeadingElement } from "../tools/heading/HeadingElement";
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

    case "link":
      return (
        <LinkMark {...props} {...attributes}>
          {children}
        </LinkMark>
      );

    case "image":
      return (
        <ImageElement {...props} {...attributes}>
          {children}
        </ImageElement>
      );

    case "heading":
      return (
        <HeadingElement
          level={element.level}
          align={element.align || "left"}
          attributes={attributes}
        >
          {children}
        </HeadingElement>
      );

    // case "mention":
    //   return <MentionElement {...props}>{children}</MentionElement>;

    case "list-item":
      return (
        <li
          style={{
            listStyle: "disc",
            ...style,
          }}
          {...attributes}
        >
          {children}
        </li>
      );

    case "bulleted-list":
      return (
        <ul style={{ ...style }} {...attributes}>
          {children}
        </ul>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );

    case "text":
    case "paragraph":
    default:
      return (
        <HeadingElement
          level="body1"
          align={element.align}
          attributes={attributes}
        >
          {children}
        </HeadingElement>
      );
  }
};
