import { Popover } from "@wipsie/ui";
import React from "react";
import { BaseElement } from "slate";
import {
  RenderElementProps,
  useFocused,
  useReadOnly,
  useSelected,
} from "slate-react";

export interface LinkElementType extends BaseElement {
  url: string;
  openInNewTab: boolean;
}

export type LinkElementProps = RenderElementProps & {
  element: LinkElementType;
};

export const LinkMark = ({
  element,
  attributes,
  children,
}: LinkElementProps) => {
  const selected = useSelected();
  const focused = useFocused();
  const readOnly = useReadOnly();

  const url = element.url as string;

  const Link = () => (
    <a
      {...attributes}
      href={url}
      target={element.openInNewTab ? "_blank" : "_self"}
      rel={element.openInNewTab ? "noopener noreferrer" : null}
    >
      {children}
    </a>
  );

  if (readOnly) {
    return <Link />;
  } else {
    return (
      <Popover
        visible={selected && focused}
        content={
          <>
            Link to: <a href={url} target="_blank"></a>
          </>
        }
      >
        <Link />
      </Popover>
    );
  }
};
